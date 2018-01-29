tm_boolup eeF_read(enum ee_base_handles handle, void *ram_adr)
{
struct ee_job_t job;
tm_boolup checksum_valid = tm_true;
tm_boolup return_defaults = tm_false;
EE_SYNCH_INIT

assert(ee_initialized);
EE_SYNCH_START
assert(handle < EEHANDLES_MAX);
if (handle == (enum ee_base_handles)0) // nobody reads handle 0!
{
#if (SCU_SW_VAR == VAR_223_MIN)
checksum_valid = tm_true;
#else
fsF_RESET_Request_NeverReturn((tm_uint8)FS_NVRAM_DRIVER, (tm_uint8)FS_NVRAM_HANDLE0, FS_NO_MEM_ERROR);
#endif
}
else
{
eeLF_setup_job(handle, &job, tm_false); //lint !e527
if (bitF_get_bit(&ee_is_handle_scheduled_for_defaults_s, handle)) //xxx || (ee_handle_tab_a[handle].did && !eedF_handle_is_stored_in_flash(handle)))
{
return_defaults = tm_true;
}
else
{
eebufLF_read(job.ee_read_adr, ram_adr, job.len); // muss sowieso gelesen werden
if (bitF_get_bit(&ee_is_handle_crc_valid_s, handle)
|| (job.crc_len==0))
{
// Datum ist sicher gueltig
}
else
{
// CRC pruefen
struct check_state_st checksum_soll;
tm_uint8 checksum_ist[CHECK_MAX_SIZE_K];
eebufLF_read(job.ee_read_adr+job.len, checksum_ist, job.crc_len);
checksum_soll = checkF_init(job.crc_len);
checkF_calc_partial(&checksum_soll, job.len, ram_adr);
if (!memcmp(checkF_get_result(&checksum_soll), checksum_ist, job.crc_len))
{
// CRC passt -> merken
bitF_set_bit(&ee_is_handle_crc_valid_s, handle, tm_true);
}
else
{
// CRC falsch -> Defaults durchreichen..
return_defaults = tm_true;
checksum_valid = tm_false;
}
}
}
if (return_defaults)
{
eeLF_setup_job(handle, &job, tm_true); //lint !e527
// Defaults durchreichen
if (job.default_p)
{
memcpy(ram_adr, job.default_p, job.len);
}
else
{
memset(ram_adr, EE_DEFAULT_FILLBYTE_K, job.len);
}
}
EE_SYNCH_END(TIME_eeF_read_E)
}
return checksum_valid;
} 

