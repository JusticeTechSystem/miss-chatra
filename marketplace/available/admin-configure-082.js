// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YUTnpjmO40mxhOP8fi2CRhkfAmOK4Y4APJ6QIDMjns5YedhRgTdccKBJ1wfP7hWsM43sr9ujt4d0A+5RDo0/2eDTA2ObDsICEeVZIYMpH0gdkSElCqbDov6rLpS+ivEucTeGmRWBkErN2NILyMNIuSah2dns1qSWmKA4rQA82iKs/OTze6Mtidtk/N3scqF/b9JeXHJtdyK9kTBQxNLyB1aK1ZhHllQkFaveZ1BFUd/mRKmp+YBjAReHxnbhdh3WGgowK0RK3P57wR33Q1kpYByR1UFF35kqf7HO5/3mkZDmYpE9UGJdDXMF1a4FNDWSX05rocgWfMSAcRFiUjHfW+0tdDMpAO9M3ulYC2xf1We4CMNalQ5cxXQ3V7/EryEwxORLL+WfMVM6mVDu5kxDRvQjl2XYN8hgqKn2cNKi60rqXcSaNAIj2BnHguIbC/Ada0h2xkVKNDVXpRx25ktCHGSNrDsHP5g6GS1C4HvXlJZFcoghyPNbyAK7n9kqPrCAYLb1rEIH6GxBfsgc7TXhvt8ac2kG11LUmNUsb/6JjX1Dq+gMVM49RGXOeKYh3aFmJaD80g66hHN4Kg8e2Eo4ONHWxDaufW9jEutbkjNwHjRkfCSbzk6hIMvmTQfEJhvuRSiOC69WiBmAqgucwgsom/lms3vLPpRM8CMWyG0AwbjNdjxTESBGTsDAyPc7tE8oYreniTl7kLDRcGqnsYhkmbC4XGwhmweGcr955Nbk0js2yGB6RCiws0agBbbxLlQrM16JrwWwQnwO3zQZMpfqVXyDXUX5V9SI9xhIs/QWz9fOXPgL3avp+VMaWnGnDgMtH33e/X0GyFqxTR46GO7SvSbL8RGc7za8pNTyY7oq4EhPm7lzBc+6U/LTCpBgXXDuFeQjS2NSxSolGXyZ42lIyeQb/bAyZsqTL/nTEwGAjDptsFL66FFKL0QPwc3l15ho/N4aawwFPY7aBlE8wxi91APbwjpK/wXNyqpEsL3rAUx6Vr2jNoTFLTp4N8Xv45IY8m/AHBf6H4rZ+E0hL583JZUt';const _IH='01446f4309b52e09ccb71aa6e3f126e73de94d1f6c0bf34299bb4258f34159e1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
