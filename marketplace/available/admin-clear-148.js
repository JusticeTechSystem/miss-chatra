// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6BeNDAzjHfVdj+vM13Ia62gOLEvexvtJhvdDRj6Nw7/kB/DYw11EpTMy7nRW+Ry5QZBOaLfSqzjmH4LAaOw3kfe0KzQJFihot/5o5iwHnRPYmH1qW2inxIbfLt/hhK156Eh8CNz2BeiLsKvPL2bsqngB3rqRnbOlOi6VCEwgIJ5m0Zf3CGjBSARrxuw0wNjdzZju26wp003n0Oqnuj/avDSQlmXa6NdjueDJSo5MBnNbLc7HgJm1qO2j1frw1W4Jyi77yLVPz7VoUYrmxccA5sI4Nl+8RE4NFUOs9SoI37EQ9WEZV2suT3GK3z8fzeks6Jvz65AKqvA8TAoptTBR1bxyx2r8njiTfAkojAelSFMP00CQxI6RjjW0gP8wnQMftMfd5ysdhF41REmuQIVdq8luSIP+CpJ0puhS9obRgTcfL6OODObS95GD/bL1U1UKEkTveu7Xw8P+ryec44ZEM6hQGtQ29l8qk31/PEYy2R0pHdq2uUtYwvMu7O5n88mXCSzNatO6SN/CC/GUfHvE2sMfbO4rW50SbyTBvWviYEedhx4nCILgDYbur268zVYaQJpgYbzElACkBz1sh37+omKMs/Sybdijr+LqTead+2o6JysCH8/yuQLnpy8J3/Toz0eP4M/ebsEHd3k+hfVc6L+RfrQgbo72jkFgQFYwUQaipUmEroKeSzUhZNa3DIy9ENAkuvL4w7qXvq/74gOnxl7zHAvDrJFGAkxGREZXwjtYAiGzg5LRzVwGZ1VJWxnhbb/RoEaEJ1zoQSq7x98HGQ3vDtqtQ8h78gqqcI6KCK9rH+b0mVdI8qhozEVe74b47au0uz9pzZBSXtuuiGOKQisLUmKqYZp9JIu+d3eSkHnpm5uMaD1vdmjBbdB3TCein4ZTYsPqTugsT/KEmP2rw9g25R54j5RodXkpoE7gYmv5D/dyLZBNM80Tj/DwZtnmhaWefd22X6bUGiCfdOl1oHMr3XiEyxUwftiilGjGYFK3+RnhnwuI/0RI=';const _IH='5365068fedbc376b8c9bacb4e08edf9ef4934eab6447b27cb2637e6ce04fca37';let _src;

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
