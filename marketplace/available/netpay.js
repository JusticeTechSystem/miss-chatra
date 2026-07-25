// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAfzzDCpPE2dorcGhM2dcY8tAiFCQ3HWG23FJMroZlxlKzxc8lWUGo2Wjug/oPEeBit4RCKAdpMpUDGdHyroK90l49sKKABYXcMRm3X9NJnLWWLNsStuGB20m0u6nsp2s9fyULJ9xbsvtNDuMbQX+AClK0TCvAOvx4M+TPqpM86X9QYp97N1i1rIO4Wwm6rQ7PPUsJ11RpvMeWzaa7fshzT/OOgdDlmY4E9U8CSZjauk9TFTZcTWfvEUNRbYhF0frXkwoGhcJ5PMmaUeL6mINCqjpVEWQVwHzYqneMF84ppDvK40vxUhlM0ZjfgFZWj5KdM6lwTuuhNMmo3c/Zl/dW8nDVgtOFXq41mpfdQPO4nTNYkbSsp1WK1bng5kzy6cTXaBj5Qr1J5ZYtAucmrITimBs0TAYunB4MUTs4J3vhlBs6merzpjhu4RSFOyWWZ3NKKcwEs+lQx1qV5VT+X1iiKR75BnMyTpr13uxHcw7vFr9XkvCytMPd4lKusKAh1ze99s2dd4gOoWs5edxjqfBFzvbOnF5ErDKrQO2CiEEqDAlBczNrqaBW6o5dP8iJyUKOwK0KSJu22JPkNeNcaWZHvXX8n7Bx3dwAyihENYNff+RvBTTKwcM6Le1WQpH2nD5dXCpUIufRt6wVxdeRkQL2q/iXj31yO/FV7IjbOh8/pO2XGGEm4Wzs0bwUnmUC5mJiCls5s3NKBBd8T5J++14syAcsoTch1Vmr4hMXiVHrn7bfrCSxU6U4ZsNRmNUgXOEMjO3fketzxYAbqP4mWKW8AxWdir+QF/mdMsfQslUv/j3511C1r9Xnbn1EjSokazAT0wy2w2O700CIPD286/5YSJws+T769Wtf/JSdM3vze/P3WC7QlX4EHLA8a9NyWV4WkyMUia5dnxmfoouaEv6dbaWCBngedYOhJGHLWtofcPAkwcH2TSP93AlNzHGG35vs13btJdmzm3ioEL5VFIFIsLXj5ArzbsfU8vddNkhjxOcG80XSeFinaLwjlWsO5VJUv8gwKQaHKEl8X0dMEONYPbqMmFI3e1V4vTooLkaYrEMidFDfF694i3RP35d1TOL3RxFZXrboSMI3fG+W4P5o0yxgoV5qyJ/V1S3QyXA5xIyrNtBBRIolA5KedGJ8eOgjbMt5WHFO3nHI3evb8JYWFMxUpCLjsgcBEovPZROGycHShB5bTmABz6zs4YTa6g==';const _IH='21318f0201aa66628661192bfd641e25ff11bb1cd40e1aea60be8991ff12aa67';let _src;

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
