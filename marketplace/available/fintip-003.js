// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dyUxGFUXS7a+dmvNih0kuo8I8F7S6n/H5ewr0JZ89iBlwpPnt361v3qkeOocIHECif7Nw1LlCntNbbdOWxi6Ocep9VRFv9+atWt/RsyxQ+mcJcHdRBPRzZHSWfaO9p7wBnRB1q/frDSChbcx0DsZn4T4TIzGacxEOS89QGODRoYK5WBWo5ffXLVNe6905eJNvT0Kdv7lcSoMTK4WrsmB5SX6RX+SUCx5Fu7zyTVfUOqckZsW53Za2Tc9SQidfAVfwWXmdKTDyYGE9I3vxFrboQCjej0mzNHkA3jIcdV4q/GgQSAQd89ysaTUw9GU1JYWmULqFv7vMpdOlYZi3usLyrhYVUnIglXqDuMceG2A7BC5ymWGbJRH+NWcvmXTvaladN2xsq9MOL6Jgd7G27WX3+rj4i8rrzc0FN+IsbonMKx+XcDScZPrp8soEcK6wkVRQRrIiRMX6pyrTa127H5TpU5eV6bnKpAmpYZNPObruhWVx/+OeXxPNRO37349x6Jf/QtC+uOtLhbAvmY94iSTTosj6uVN782a2gfykjsj1b/mMZ+ibb1wUq969+7/d0MXvV6dGIaDJi0TQ68u5taBFNpcUlj+ph/pm6QJa8tFPY5lMUns4q9dEu41IMU1+x1tbE8/9bGQLVZgdGXreU2x7WLKrpaCN2DfVhx2yF9L/SEkYe1O3SV9LQvi1ykPInht1R8AFuDa2/LQr8X19chtc4+3Pnur9Sp5WPB+GQBmhE0nv4WveoPBfHscxthCOoAmtq7uBh4fFNuBSPbGdoS21eyVA4s1zRwrEVNfvl9ZsGhQX7LoML2Db7AG6Xo8UKqFIxGY66zwzQJod5cSuOYlTTfRyFn6EE0UkND8f/JiYDbjUWvAhRWvPesadKDe83x/MxK++8mTCpMNcn5dZgjopxiIQTcWjrqzOBRPh3pEEUmK3ErY2HLlV5b9hMYivQmPzuqFmV+8sdiKtof1d6CNA2RoX85cjmA5N4A3S+Rbqy1G6LMzNPIaAUCAW933YSgUoCHCDueheHb+8l1ZDRGBvkl8hDTyIQthMac4f9yA';const _IH='1a1979b35790503a5dc9fde98b343cf52e249d8253dbe25a0f8ba60fde4d6721';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
