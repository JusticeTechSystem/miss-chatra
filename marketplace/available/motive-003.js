// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROQ6X+qNi7B09wRH2srcEaWiiDlEApRlmixEoT8slqz+U2IIITmAfpZw1gJaF1C0xV9IqUW22vDdEzmLAfk0kbhjn+lklIHCigKF7zXdEXsel55c0fD8O4O0+NSDGxdH4xJ2rs+4Qw4a348Fs6j4DNqyli3ot33IWSdryS4Ex+UojjGLsP29A3+J0GnWf7RchfUZN9PibNmdkXBNneid1UW9ZcA4DIBzMsl2SRTozAHnSgrAml8tnBAXNEZcfJnOBJAjxncVlwgEXWzxXsHVs2hPW9dEMqBk6E/jLB8sWzZJojXeTE9DDiEWgwaH+HJLKGWGPlIBBvyhTxu+ZNECBRtJoDXpjxZwk8aBpjD/NNhvA9MjON6CxKpFq8dG45bzhKUvzQqYf+K6JKo77DAUAx3c1yXU8/0zEOuCxm34vHDyxpM1s4QNCKfALvbFuxgAHvQrYkH1RxCsrfMWPF34f7zRnNqwY6iOtuBJ+Tivr5eANBHtzyHXJXszYzz0uAq+WoF4A968Nlv7Tfu2LqX1jXmD2CCK7aPBU0hPvKAWb/ohL5DIuN4k7F9TLu/OMlrTaJe7Rzk/g4BC+nOTk6SSU07mKkfGeZLM3YHeD/OxJjD5+qQZTDXdcqwcHpUnyGdEMMcuTWdDicRC9kXO1MkPZPFKVT/Z8TktY24AYhZv4dibmKaODRb1WUYeW02lOmYpwKczYJet9VONlrTGuCnQn+t4By9luq8xxjj3N7NR1YnyeZX0ZPrP6I4YzOB1BF/mACjTkbDAVRBURMCL8BN1XYRCMKrAhc1cOycdjqanOsZucdCL+FtaCdu6a/7cOEFUenlT9CGYCkCupgVHsfC9h9/9s/R3/+81lRi5V6fYl419v3P35qDUVAcs+FymGettq2IkNDOs/V624iC3c2cm3pxD2UoHNnr/wFwfU3vkSfkWXgMH7JJTJc4VzU8WbZu9UR/HcR97qXMgjNgHZ0/gIpwhu+4m+VwPBtCTSE8Pz2UfkHN3GxCQhNMym+fHxkbLYepEjyRn5WVuNjGevRAg==';const _IH='3de923b922b9c145915f3e2ffad797755a578e355766ea0efba6fb0f341a3356';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
