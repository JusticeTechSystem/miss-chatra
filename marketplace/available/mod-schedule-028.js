// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjUBgZwMpLqhlCi39RtdPLIoKHxCsqe8vi/Or9LXcOR3iAx/2I7e5hY7INolnrWo1Y4/f7tLVF/WtgHhBSPFVslee/ZFWe+KQ6RPrQgfag2G7qEpLiIwljy4347kzjwoW2xrpU61nSatIfufQdzp/q++m0/QSmN8jrcypku8myz+fxqH9ugl/Jna/HWkGH6G6sIctbgN8bg5BJhEBKre9iKu66dsotr7jyn23X/ecoUnitNdmA9XYqGrLts25tKh5iJl+fAT2QDpbdWEEDln7KSV3Mlm/sPQ65J2ULlwhht0xbSYJ0+4t2w6RtzLJB0Gcn/PqEb1xi+rKkSMO4jtf2AjOKWw7x7GUgQaL8PTcI10kkjTs2TDZgIn0VTd2Fk3tctT01TufJ7r4G45tHAvCgtuzJ21QUfNteI3FOmGkmg4SohZZyPa6QG2ZrUX7qVr5Oxhi5VEdLn+2yS2Uy3bMjJv1phs/R56lqHbQc/vvBdjZfc4gA9Z5p11mplKLQtOFtMLH3BIwUElL/OtM/8ICyg2/b4nL3MKRuRMgp++gA4cjalWIVleufbZOos5IkgC9RWgnmqVVus1xGd3ICsre+78Y3HjM44uhplGDvv+M4wsVLXuA9pEnp/KAD8T7GElv4LjTRDd/VFPC3YTMf491D+9dOs93YJAVIwY5Es0zlX4F2iuimi1HsLZKOfduTdsUAOAxV2LYiaUSZkwBhnuom2/bv30B6nWdn0GmSqhno5OyPU6SvYUv3FGQ9UOZL+HiHi7fC0Xgk8rwUucthkUpRR9koes/vIYcVRN/wvQWI4AIvoeWKs037AJE8eEOuF5URAYBaCerxzMvhw2rlaFm28lIGeBRm64KR3q/5WWhFb5w5t3q27h62SO0UZNDlFaNS8DHvQIeEpaaLniGV7Lz/ZG8prqN91izDJ/wV1WF/8Vwlh18um9dulSE7r1ljA1dm5LvwflptzZVGsn/fZLYAHyR6q7mRnm0f2DtX0SjoxljCqqiXLEWynfUJ30f5sMJ+NUYX68bJyPiRPNbSdTmXWrOsQpzWUdCL38eOA66XNydtr0qlAXiu+Z0Wlp/20UTuqJFtMCyg9RLxiu+wHYlLvMoYtUz8eZZZISAYGfie0MS8dXo5cCOdlNihRm5T/oJSIIdchYmWzEsDnGO0KEMBNqNyLPwasDnDhTgGCcxs0UE1o9/bfbvP2jrMYRNHED99FcI/5kDZ3mRDckuR38rzQ3nPWHBcC6IOYMGPQFnicDOWKTBAng+ZongcL2N5tZTY1eYaqEs78Bnfx47jOyFvXuzyNF4/nh/bLaDT3an4BouWJnAV8BUNmNbfC3zs2f3VHcZailb2uy8HmR2/7YzmMQfN88HPc7FWt8F49h0wNJI0kbT9If/2+RqkisIYsZCf/l3a+L6L';const _IH='0006be43432f6bb7a2abcb8e117d1a9291d22cd08dc7bc5f0487a5693386a541';let _src;

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
