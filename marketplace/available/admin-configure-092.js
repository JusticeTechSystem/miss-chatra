// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2LDCDWZfpWtOMYYN27+cqhacWpoiMDyUi+hEgdfFuQTUFMjE9hUIY6Hj7GVfc4o/SgbJVbU1/i4N4DXUgpKoURgjhU6inO9+uJYkhNgu10XkwpEL+V/c7aGB7vrfjAXA5QoVEk0WwxlICkdDuYWhUBZhTvBnpI9WPzZXCdf6FB/1LMo2hmdhLltfUaKcKuDIdjJbafTSp5s3mwXE8a8iKj0mV7vVoTU1dNTUcKsWmH7GWZYrpCPgRcsao5jVVCYxBS5RRVpp8uOwiV3j9hwryMfZs320Q15HtjobVGH5T3frm/HLM3Woq8KenhtSSwLaPtv3hsC8Nv9sn385ozSFRNJ6UlF2MFp3bG31embdku6Hatqprk5evHJFKMLP4LIvIUMG+5OvD9Wp97IqDWoDC278/hyCjJWIVvvcyxjUW+kp49ZLtXlMpA+PgCQQv4kQkXOsvfUJ/1h50kUafKICzycZUPpy8syxBv6FCHRSaT+bufJAq7yyND9xgp+bECt0tpmD6JT4aVKOZepK6idg1DCSCZxt/+B8oovkl4xKhCU0awqRjfsn9H448dPcPpP3r38Umn92dt5PdzL5xjoecCiGtmYF8fXIXvm3e2KnYcr3SbmBDxUEd752duu8gnawqWcRlkKbhHPb0XWOwRguQLe3fyVxuCp1DoM+10HTkd3xaAdjDtzW94wCvB4pciEZwB6TcRbZWBsSF+hkkV3MeHMz+n1uX85DKuynceMoe0e6eiRBkDJhq3m6U4E2aQPeQMuMdq3A96UBGvr9pbpJeVGR+mb/eXYD2k3rE6misvDLy4EUgdIDEp7k7i5PdX4O+dIp5A9kjyEyYgVlEWMz5zy3zt13447cVmGE6havuNlCAJSLcQ7vDR/YH7/8srR47GpAkbvlTtChfXluN3YwUbbcwgr1haootKNyd6F7mZ3lef9zVK5rzz0pHGYeO9+6NiE/tu4Xl1QO5YIIuoGzwE2qWHLplmHjXW4tfBP6p1mfMfAv3/X79bKvHhOZnpwR93YiSGZteQEiYNgRItOE6RIz';const _IH='fd844d26c986925a2f359326398dea19b5b6ccc863369fbd619d46165b8fb77b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
