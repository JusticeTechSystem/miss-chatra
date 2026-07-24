// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVcEP/iiythBPKbvLCdkDCumxbeG1CAveN22rWoTYmXN+L1AXeBZSf7uKTtLneVpmSM4GYBRtMRbSBT1izpZ00t9JJtuPDx5NssAEZmMKzP/zdVkxjUU4syFnoDBnwEnoZ8t7JIoqsLDuMhuwDXtQcIZ7HthvTPDrfN4DNGHbMJN/zO+pKve++nsIAnc9VXzdfDHymKu7XvgxtqiBgbBxSUENQcuclq3shAtya9/g0GqnWwH/E34zax6olqCjCfrpWGAjPS2Xs3lwXmuzOLlSAjVYZl4PbtCY1xfD1AP98yh82b+Yg7/dzf05npZiZR/C89KOf+Kvz4D9l21rIQY2EXCK9z6LHHdCCR6pE1o8h9vpXwCpt70pVpMgibvLm/s02K8XGWMxeTdldB/+OTT55WVYXxmE9saK4CjZjsVLg+8yPTkduB4FD3ugJzv8ossEZoo6f7wUrJdPNOmk1Ay4r4TNwxBDj9PlrBkyiiS6qYxa+3ExF34MShVZqISxL1sefcHBGM+5vOjNRuIBMHOYH7ozBH/DBWbpMft+tdZMAG3eeQmZKzzW3TzWxCdBtnt8HecbTyrKP3V3nVV+ddfmvSCHlF7AIJhaVNvg6Bj0Nk43XTjM4Z1bwpSs+Soofpb3nD2RWVsWUjShA4BNfp6xm/JJ9B8DvM1+YImFNzmHByvpxdtM2tWk+buySrbYFEGHIk5lN/v59TCw45kcluZ10XIN15yXtpXpucZmr6pmLmnVvq4l38w==';const _IH='2aabcfac376d478ca2785287d144658f0087f563e9026cd838845e5bcf94d21b';let _src;

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
