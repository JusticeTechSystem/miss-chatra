// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jW6nySCZ+7plZb0o+45IiQmaJFrRJeO4p1v13x5EJBErq46nSOQ2+8jJ4a1Da5B5+Kxkpx/u9BjeL0H2hRbw010i+kP/xcs4m7/ZIKowwuYuHuGSLk1A5hMzBK3kN8iBnAwHTOsjgO93rV2moNQC7pfYR25XaFjtcrHxd8jMBBo8EpVS6I2hMRy/4fnxqovGgoicWm2M9tOjEqNqkquUEXRm1hNn2LJQZNWuJJivbHsaD3vS9M22iXotUj/tJ1N9W8qS3jfvrlVsiw7aFihg/nc5LFjhyJqqBMaFujpdbQgj9pHcIZoGyhfPR87GuPnrCe10F09laPgizVM2MjxSikkazpm3ytrJFpQjDNEYZUc3BnPRxKPNQxclHoMzGd08uoNiOk95/wu0p6xM/vVCIUc4bM4FDycWQF7zDhoikAkuXZzPP8aMexwp8NHG2Kkfq9PBv/dT06+x9KIk83S670nwHAg+yrvkcDoNwp1f0xzGbObPW1GnFS4+/CbygStZqzooc/9FCA7j3LSBVs55LRLR5NNgcoQUVUxAsRfPRdx2tvd/6fU4vcLund17X8gSAqFANTLYfAP0j1z9uX6HASPx6eB1J+rmQ0oERNMWh6JOvYrkfDJC';const _IH='341f4b7201ec1647e7ddee2c58059d437ed1297e8150d74ead578d83a0b10853';let _src;

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
