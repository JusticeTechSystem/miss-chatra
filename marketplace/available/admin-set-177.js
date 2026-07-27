// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKOr/GXPL7W2cRWZzTZv1JCNNNLALR2GzR9yn3K6V7GXs4093nIGDKabx/eRVNFQbTYU382s5v91Y02miTuHIzd6jK7uVPtffVK6fRaQokJ2urkkjn6z5asmSEIEojYmgL/Tw0CYE66k48lG4UIOkEwufkuSodKuUVZnUGBYJOv5/qrMWj5aalXxHBojQJOSi/TBv4B6PrDjtw7to6sb/PDvC/o2h6O724HY9efszzTRJqZEHAkVkL3F6dke+wyZeMN5VKDpSWmqL0Gjc+jmWInfymQKI/xb0BxgelHcRjL2sz/EM7QJ+MKsyP9xN4A/ii/dR/rg6QJNZX6IBnGsVse1p4NX4/zgL7RThkpOaOiLCgdD34I8r5XoarPAwMtdBtrGODptldX4OK545dIv7SI+XnSsRghOCOBgcnt6XjeDCJf3cH6MN2lPvaNyp54o8ZuvrAIrkEII9mlCr9uLd/54indIty7/6KLyME0X73GZ76EUCahhV/dbzFZvuE7b+kd8Y2HU0MmLnoyBKolAaYguZ+Qngnetdbn9COaxwHorUIwq1W6bx4ouyeMd3Fto4VE1EyWRFhrTaQ0rJYD8QOQuRG9eT8p2sC7AxycE9JpAyGmZ4o07eqcrH5GTSJuwNgphySoqmuhytlt8pSOwVgjCW1Sl/WfWka2b+W0mX+n+XEscGtZVuYZFxbeuVhHj59NWdgnYkXHzfK0LZXslzA186mYCn90LyfXymOdTHn9TMlehdoJaKAAH2ie4nClcV9qLv+7og6ss7rUBvZ54kxMGbHzU0cgh96l2Q4ul9IbeaR8fxeCUn9cbIhhBrfJMM3NajGwGlsa3d3NwvE7Qeshd1eXlV2nVi+ChlZUJVl1BDhJ2/jpuQCioTdMZNnu3Ret1DIkUdqoydUWmN0iBgyU/zjHV9q95P2lRd+BuhGTGXYw22tJ3kvraWUk64fCfZOWzXrU2ypQyvnujMHvhHw4EVGvydjorz62o5v';const _IH='0658cec2edf2b5e01175db81ae24caadf0565af7f2fd92ebb8b1c0f2ee7f4b77';let _src;

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
