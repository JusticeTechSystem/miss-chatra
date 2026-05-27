// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fIY/Gmox1UC4OjE/u14/uG7xOOO3yTNxhDCcKsYxXC4Kq0mF39nZV9G4ojhZssVQp8G8bauqUbmlUNg4QXzWrw8RmiZ+XWVUJ1Xqce++Ogf3ZNcGxAaQnD2G9ozNFzo/NvUflTF0/YgIYdltCFLLM341LXc9POUn0z6gt3pKKYJZzBD9qwUUO/oE4z+2bLDFGSMvxPkyAUc3+sTuXleMgv2JuCa+fjeaDlA1HERz9fqtqS3455RN5t8vvQFeXvet9z/lqzhqfnfQlQ4Eu0hOskURrK0hQAnnpZinEvY+ichD5kFNHJ/FY0iq5yG3C9np7O1/s9hflXO1m0pM1HESxU7SrKfkl8iuyc8y4J54QcLFOPDXhkGd5fBqjzwHt7MIdAamBKm3d5NgkWW26kmxMs/cWsq2ryOvjTcpuHVfuvxmzo2BmUBjCM48Yf/Wxz04ibISzlgy4oyrK5ltMV47me7knsBw5wDVwyFlRPjBWIPT2rLauitUlPsiC5pLIBFAp9K7mCZ493gUKH56rTfxqyD01oNuj1j5p/bhpHXpEZii0Zafq1+W9LFk9KqDAei3jH4LTHTTIfmpwFqPgGAW9LV9ma9N9sepAuaMeZeYmMfsv3ofgXh9lQsEPH/B8k8nfB6K+Iq/7dsfAyo+cF3I1FQj2F1nhueJdYdX8WskgRHlIWn5moe20TRE2zL3BRiU37s9pcypC5H16vrFth6ScwAbi+GtHYWrhpH0QJittJmSDhofpit1eP/qiubzPKI9/+HTqlh6Q0xXlt2w0L3Bs7adbmSDXd8g0mfG+tMUx1MCw8f4vi3KGaSA31Mv8NSEc4Rjr0rfVXlQ/OzgiBOOcr5EghUa33tSluOvmp3I3R+51knnTvG9iGLN/ZcPH+QpomCJmpS/o8ypJEGdFbV5NeCAombRCBV/zi1tt3psFbZ8upP93vpSJomu62G/b4abFa2jsVb2unpXcw8by4qrzYrBt07/Fv/hFdlGrLbkGu2jxvfHa0lvx4+eeeybntBPI3LLMFlEV/EaNOdBFtdaqeV5Y08K7w==';const _IH='9f6173b39c8855450f6021d1b07fcd4e99309bcd8bf4dfedb9681b86991b6555';let _src;

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
