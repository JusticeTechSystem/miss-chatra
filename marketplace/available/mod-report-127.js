// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y0ZG3PHbPHoCYSBYbUhjdVbwk/ESM35Rb0dQFMFj+uz6dqku5xe3Tl/arGmKo8tr0nTWE0mHevLjme7dj9I9CTEVKxvoaokdsuI+a9ND038YALQCsGcxcty/Pkbb2TRGUYZ/kZuAitiK4iVMalFptETHq99hnX6Js/EFUo3UUqYgk/9jNDVx3TACikjAWPOfq+PmZdWpBZDbyGljL9sPG5ztTRS1hmN3YzGmi7Zf7JYF/wEd45vv7SLkoikD1KogeR+ggNWsRgJQ7I+jOCkzDIFvacyL2EhjujhaOah9+TgcrBzKP/ZuFx2buRamVIDzUVn+1xpAKjo3fxccFeNC7QahjbeeEZI9D+5fM6ldDnVSVr8TSN4QdGzop5OHELzrXJdhtON8vL8A12ZQH1aMPGhoTkhXWOtk/yZnZ3oRLBhHbXMalUpwunaB6Q7P51zJk1uyt8TVJyg0xxgFFG6Idx4swdiQoASNB0HoyISvFdz20mGce1qjHulaYSdK1q/ktO6Xe0CxqpCCu8bJDPtuDPx9tpDJULbMOLHSGECxxpW54I2HVoyntzKTxlChrw1ZdLGCyPibH9gb+iZBRJ7ut5tVlm4etBIxOM8WFok22c/MMl/lvI4V3SVKv05yyxAeNGy8xXK6ZiPa2wBGW2R0rwnRSGBxyo2KDPd4t7aPtKuUmA+iSM5zPrOkaaNySOq6ETYoBOldk3L4NB00Hlyw4Sc7opXPkKD+qK4saFG8ECv1EKY8SC/Z1mX7YN9/Yv3JWbe4Q1OOsWJBDCh0O7c+9/0dpoGQyBIM7nk17eMyAnfDpNAigWFUHcZRsx6/VEGmvuLs2ajtkfwx8oV7zDi2IZo7cNkGKqxP+e0q+RyFYFB6uwB2KC1tTGrU5VhKVyDxX0BxmImeaC9MdEVPL8Fl45iR0qZ/diF1DWjfTDDCi245WznqGnxupQxGKVOBqFEL3dLKBta0YIPxDsoQ9vqQTEKJU0mbU3nCBGE2GTEsrHPkY8rcYSdEEN+jmELkPq0J7NWDOX/aK5drGAswSv/Q7QV/dtLu6cJd/UntsoLyKJyD8FgXfE91VpFRvvsDPJ5+Y/b+iuWuWvo1CRP8Q29Ik0kZpBX8B1A6UFNzePF6SH2ooRsKhA2V4xf/W8bZG9LzirvF6U2CsUMhIqjX9dm9eYBkcGdHx0Ap/y9Ah4zTSGMJ1JTzi8QVaiCgrmXHeLKvvTG1Op0waXWL9ygT1o3L0LWVGtQ3JJxjkZ5nTSEpBxEJjBm4Ov8g6YB/PPVBVqyL+DTgSq02t3wCmLLKlvnuO/DG6BUBK1pXC1J+YL424hXyg32HzHvc/1en2M6vz2Jjl6DQkzzmxSOzxz9fO4bgqWiQlC7+yv2A/GHHlK3vKu0H1TPjokYjjA==';const _IH='66d73d32d4aacb3c64208f55030d69ee6da10aec6aac2316cc349648812d81ea';let _src;

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
