// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4d/1idMr1l8qdEz86V7dt/rmhjAtXl0Buj5BJJEvMOg+pA11s8XnKhKRm/VEqYChRCtNW5szaIOi/mCaURSQ7ffuaFtEp6A9l1cam6N0J9PVcyBok1LZun2CBIthtkieanmXnWFkzl3GIiPWjNOXjcyIFDZUtdDFe/eb5mhbPEHSwm2E1yM3xfpqM2BMmj4idfMtcp92KuYir/qrdMilljHONiI765xvgjGWfiR+8Gmn5CMmx9fAIgsazhAKh707G/nxaHZntj52c3CAERqFE/ouwu1nghXm9A7mBUdimv/MPFKGMdDTJ+6hz3OSdkCGxxUlrm4+tK8KrscO8B0+jSrRIOqQ4SO6lTSmo6jBW2qqLRVB2BqhPIrACstsNFYnI87sknxvCL9AnQtWxdsNi8WPHTbJ3Pc3rZWUknOXGcrZ/3xPXFWzJAZZKPTlW1uiIAq1rFJHKli0lQ3621oh3E0m2a476Yf5zeC96I40Ov/RhCqWVUYhepOPL0doc72eD61OwvLm2nFpzlwmp/JwIA0PPB3vMkdwhgZZDvFgoFZdxcreoxioxX6yUECrIc4KyqAlCBT7tULMjylHjG9Qxfbs0M4YWDPQGNvDzLf04nBljvRK1qFqUQE3v/fzfwdb9SXJ6ImozO9UGTa8eeycbjGrrSNoRjM1veoNIviUn3S/Qbrs4BnK8qg6TeXzYZ1SxGBFr0M0pvoXgsFaMgKq1ndqmR6+JIbjGT51GWsGpo1N1eIjjX0DRx1jFzg7NmaI+JHcncrMBmXnaTEB2VX6UfE9KwZXmmO8syfOlRanIdr5tHZ6AWXPoisJ4omjS1ypmyO2Ky45muJb3RjmVi9YWammKU9Te5dBBzid8Gg6lpeL7b5JNEc/PJWIGSj3zu+zgmSl8GpK8iB1ZbT+GU/YlqWVHj97jO4RodqmR37j3MDly9yYdiukIF5H1pGV73afzL5aWZyXXjEEhdHFSOc6rpIdozSLBVVSY53o5iiw8iVzFP2jZ5k=';const _IH='c816718f255e740d45a929cba8a72ff19bfb40e64553553fe7055fc48ea32da7';let _src;

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
