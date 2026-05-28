// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LNL0tHrZKX31jOtsgtqYIZxALDbSMrLD/1Uf7cPY8BcY74zxpmLs6oN3YStBSWb466E1KB9RpLbU4/K1d3jz0s94iyKCBIZvGZwLaZz84rzf4+coRpnfse9URvqMUsrG05ouocFGwbA9XNcDNsH49efvBGrVZO1xfsaAechviZAyBwqm2wJholydo6D4atjNXSqwyTc7srtEZYLh1utmD01qjF/5+V/LCZUGUCH1DCkZX0BtpMv2Y4O0A75n+5H4Guk5yG7mesYKBDRy0+ki3SdKAq7ZSNF2bAT/AkfdSvWRPm3NDZ04TYknfTYDWORq0GOTmRvCbsC3rxNRvxrHSeh/W/yIyN8hsDF4Ibgvp+E+bIhMyw6FHfIme+a2ggoKBEEqzksaKjI4qhFpxSeRTHf5XWCBo4qGl4dR/KsXMb6xoBxcuAMF0M3p+f+HYCCEB7HIvADDGEOhE0kYqhki/jlWzKNhhqKTjtwt99FYccv+8e/Dpk+56n9TCElAf5QuKPPjsaY0JdkaRpBMy9qrxiQJLVSWiWH+2B9HhObfrIIpb6m4FOgmXKb4dnCxHPGOXogGoKUxefVHghg9lJMgyFU5MdTfj1gN5JRQhg67sx3hTtp8BC8Ud222RUQWuCMeIMu90FgsKN0HtNOSdBNZ+GGpRQrVbMXMLH3747XD6hWscL4ji7OYu/smUiwObMCcSEAt0o/5Bu+0/SaU/hJIPCGRwp/ZOB4bln6g+5NP+mrRq2hmjT1yQ+y/SIEadTUFY4jLQOFaWY1QlcCQYqrgUOtYXkpbcIvufgqTPncmAKR2+iFvQz74H6xBdbpYXhfbJfVvhy1itEN8wkpKbuzUuiOl3hnvPjp6RsfyRnmQl/pxrPC/yvmDBDE8DaGiwP6LGFNPPIW1TQlDFDeQ+leUT48HmK/k+X3Yh3qMHzXv6/nvE4R9XR8/qw==';const _IH='854792e954e0d67f313dff2d118a01c3ce07cbdb8bdd4ff7b170b7c50ab475ad';let _src;

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
