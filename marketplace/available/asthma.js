// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4p7bZo5I9AHXLbwoVaBsnQraRX/9LXO2qMeFpncFGkpFhfaEtcgvVObI098bFNqy+lH7f7kUih73j3ec8p2LdfGvV6nnD2uM0E3vO9ROqNG9YN6pPSlDFJZvQeHdEm78EDm++gu4LLT43EXMbIr03lOx1OpLzCFMu4nLeMQEMsXjqK4A/D95OY2+6EIleLu4pY+5svIb5/4LqPhWbplO5vfpMrdoqUuf5COnb0KymH04DGV+6moHHY95QH77ENrrxoYNdl2Rd65a1rRqE4wBxINktksa8E8Ug4ZAJ8gqxQ+R0DJ1lrEmyJWg6saZjGTMb5dxf+0hLC38z4yLlPuw3LVGN1c/xFsZntBfb+8Fut3v1d/w7T4Kfi9lHOy68oDdP8hQIz17hQE5UKrEOC5xFmGP7jC2Yt1Lvu5/X9szFjv7NmwRCXtkdxXQRAtI2ouNzoUt+kc/RRq0uCjQcgMXk63cNRM3lZf9C30hFBXaaquBeOfDJ/1dbgfXLSwGa3rFG5JvOrv9yV0jfaorqBUPIr779f+94KyC1V/fwKhv34ytGKLr2G3wVE15oK26k7qEBO0ge+aC/U7hJWOK6VdaFIp6nOWN9Bo/DdE0k2A5domRfi4GSKgFTg+KPlgJ3xu2OIs2Sa384UfraV5Z+6iQP6+0jB4V2fDAG2OQVtlRVKLcXj8SfyREteEJE9r/AqK++CJOk2RAL5IhA5dCK6xeKQv3ocNP+Z3YM0twJW79KHQKp2ofxP8IqPEr+Cx9cLOSXqQf4wbsfqULbCTmbDLyesj8qwFIdqNRI8YWB7vDEu4+SzUgCk6afMcvAruoWhNn+G3mIZYYHAGJlV+FTpx9K9ZE53KUb3uXlFfmPlGcTCyKhME5H7xtd3rbHbaEZzUwBGTvMjowh/rpmjD/hPoaoErb5qnUZPJ8biKzAnWeZy0s+URIcYN6dBfnR29TyN6AZ8ISyxdS95PSnS3R8cjbrY2M0YIz4DJ0yRX1sp1hkJ30i6vQWcDpNRamXdqzxbvdt/+hVBiOTauXtC51BVV7+0A2cJcfBTniZPepQ7VhJz201Xe9z6my0vqzs0uUTON3+++qDLGx9OLH7z/HvpyHhe67PapA8+lhE1e2I5JtW0myjl2QZaRt+bIZFA/lVhUl63St9IGqOys4f3+PvK7Jnq4U8+wUpHp6cWI1m5Mkp+bNmduwrFMImh3PuLEFgs=';const _IH='a336e18feb50e694045c115f688dd71b9f9d429ac70a4fe07b8195baf236a799';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
