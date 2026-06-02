// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ddf9MrpM6az+n2MxaN9rtDbesMcOIa1c+sg2AT3ojN3/WE8aVw3Ea6i7VqW9MHkPsZ6rZ8ARA6XmR4Bn3QMxtxELiJQqJ6qW7k0P/kUX4I4hz216tXdLdEYj106VoNxMzc3NUlIXEkI3aK7cVlRKyPIwfAvzpCg94UiBIP3nKYgtbvHDOsQxlfrWFRHOMHy/EZY0fyPtguKnrlmN5kplxUjofVUSRPM61djGK0i4KiJeQ6vifwALx2rJPq+kGiQLip/RlWzwLakg3LkucFJTXoEcERRTS53CUA2Yqhp1YbsIGNajdR8/IQOFP0G0V/CSZXnG4pg2o57vk88lkLkOLoSYzjg4xpSmXfMj53HoYecuOBBL3Vz4XKDuujtK9sXWYTF1/d6ebLjuy4Jatxedr5k33anifvtPnHXKs8tjtb0QqKkxapD+SCmQsB5PoAP7NjfdoNoeyKfzICZ91o2btQ6ExjfnoWk5COeQ/Dn/NPK4a/Wwf9xZSeOjRcpzJ8voEWkrEIsL/M/DFbkf2iN8TMa96FAq8m81b8v3HFam/QjUn6JMAH3KFvOY7S9gVr5VGtS/ONglfqXeappXSKbcm5godqt9nHsu2WzkflWplfbGrvPks9/vlZczJwBpshhWH4xc6pnggHfEIUjkU5NwN9cXNhmeW4YR82a29AunnV9mIVPxYtLMBIj8NMAeLFTx2MZVJCk+NNCAsySw8sJeryMjM0qcq9XAHi+0MATrX9uF1YyYEYAkxS+JXQ6Ad2vLTyd+sqcTIMjldQO54SI/zF9n+sjG9NnrS4L7YXevIIC+m0ZztDlv7tJH7sLodBHPWpDjjrpPwNgG+sTcjjglSiI99QGhX3tLjPneNIXE04SOo+uInH60I0Mg0fxcYiofnjs0c5N4jBGv791aTG4ip/HDkPixux/sGws+tOjYwJ3qZabBelZlAcm5WdQCYHLUXmw4FJKORoMIIbWUJWOYp8X27AmOyKWDxMPmJ1Z+MdqeInsgkQ==';const _IH='c888918c4fab92464cf13a9d982ba8270f761586211d5146c7dc70751fab3bde';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
