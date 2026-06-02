// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='neu0lWY5s0M7hc3W//+EPhU9pdrIcfCbS7T02XSx0wlosjiAaqypR/6xnbda71p7zT9OGowKoTCTlhH01WbDmZ4yyjic2aSA/jTvIgdes/3i7/RL4TBdMlOUQFMTJi3KKlGdMY6SO2Hbbut99gvbrXmGbFR0y+3tSqMhokAQ8OvCsKS1Q4SGhF3y0PG7HcX4My3UWk02Dx44m3UJT9fKpC/fK8Do+lwL2OqNYDp5+eEObHOdtUfVwFD908Alpw/iF6br9KNY98WYnOcsxj5ahGcIzD2W46eGhQNSbPmus2zEt3eOyEebTvA8WsUa0gEW7YR/5puAODqsfh5YTvq84eZTh7s3zOfkRSQ8864VNn0EyPFuliX0xftI/mFqL5j8DE/ceN2MRF4XwqeEX/qKBPaBWIaABbey0mL3QbYnOQFhS6O5Tcvm0qnZL7QT7J+x/K2Dq+O9D4QNfMHR/pGgYJW8Q+ZkQK4MStlJtdXmRtVHXJBKT1fL9LQtBYsJDjsgoM2b4DlCRpTwtvcj+K/e6+wI/fVPM6oeseAp3VR4MlQENHPvmFrEHlhND1nJtn5NqZ+eNZwA3G2wBc+EdrcueYT11dLofzc5xvDU/IYUMETxyO+t49oEHOWxzLxYmajmlTNMoxB7iB0jLF/uNSc//1le2JYdj0e7OK+IiKpk2Tt/55T5BQyhVse8WnmqqTEIehwW/XcISvLw1bdBpUFXia51Z63Hu6Y6NCeyi/4pwH8pubsLkIEPOgig7QZxLKYVu26muuYTtQ7CcIcdFtvZ6PqgwtVav3hZiIRQCQRsyeF7Z1OflDuaTb6DZxD3ZUfObQKOD0hLEXW3hQg7LJP4j+NNJ+8iWKG1kDK2EmpDQYqKjMbMQs/mW7NgFDemjFVYZuq+3hLqD3qGtUV5Brz3RTS7uKZzuqeAQhEzvID0/zjM04mPxgV7cR8RBZZ4zAOIZuyjajRaQQobYxoU5bXl4kFdMzeMi3rKhsorOk9nFDgfFGIXDPlhWaeDUaKHgafmDnHye01+g+ce/a1jeKwOL0NITs+NbSRHvDjRxYMCDmhNzv/DEjABUrqnynpyD+dEI4IOgzXYmJpg/5ptSJNsVaYd3oS+BdXer2Rh4k0q1s3sl4fOjrM0xWOSXCZJbdV4Dy5sj/p5zKk/AQDA5MAbCrUg7zzqBgkRNEeJ5fLVamQ1hFzDlqvTYkHkLTEAebTGFlbmxEjj2N97PTRlzw1Vz/7aY3R+Aua9b4/WxV3+4uUXaONZ/FDmiZNXfrWBEuxh0QKiExXICH4VL8b7xWxgkHO7bDhFlDlmzuY3PzFMpTu3NEiJkdjTT7t6qaxBTTH147qnmcCcQZgaghyz3APj+kVFzyfxpisMRFyld4uygwjjWAolv9AMqw==';const _IH='26241b11a16b2b1c9f6307acd3ddab46317f79b2e81ac8524ab0698a53c2df5b';let _src;

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
