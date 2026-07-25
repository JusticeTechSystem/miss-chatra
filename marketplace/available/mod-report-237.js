// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvgJEgWaK+SwU0PoqPQmaZqai9+iEOE/qsOB7vmgp3rCuYVhhakE90Dmdhm+ZnuF9W4TaGuEXeNSeY9iWItkGgsIIjPrO9JHQ1yscixAx4WBcVQdrEesSftU26Kow55Aa3dtv6RNFHHYAY2JV8SoZUbZ2XYQhj0sxD+HdVU3LKFFBnLQjCZaEU3zJOyCnVJAsC7VyCqAWNf8bizLccmCRHEkfVMtV+gnZ8CderenOFhO5oR0vSUXIHCVshXtLILaK4dSDbnJLzoN8XgzSmKjGTtRp3z5fLeKxFu1AFrUKrcf0nOTMiaJzjJ9Ex3Hq7Vk+jti/jFz9TxpJpFzbAyzOZL09BpMn05gcaJEhtKViCrmaS3FfWuxqReKBHHWdZ7rnqTETcxE2rIX7NkayKFia6zvXfaEMeG4GCod1L8xa58zfLbt5OR19bLYHg4ZrPPi9bYlrGdfAOl7rtNoJVIVDJuXss6DzxZbzMUZ3lB7WH7tv2dF7DBb8Z7K0/4LPvfGvx3gZlOtGdVOwdBVETse1dLo2b0urOyRt95tDIVndIJ1WFJE6qLvCFUSJpPsaugCA6hJFKD6q45oXKTvmUicdo1efrnaH33L6LypGo5+1Q1dvEmBnGzniwMVp5NqIx6//GcPYDJGXZHZD1v5TiqBd1OMOwiWy/7ZG3iCz939G5dv1BDbvBmyy8sCSnZRR/7sHqvULpBN6NMbRHSermlJqABWGP4pj5KCks2PFqPh8prfOztdmm2OlZ+mMhadF8zkLOxvSBpXt2/7OA2KO1BuuNCLLPtW9VQzdr1tZmhxCvB3Q5o/KuhEy+5PuQMOnRC2Cc1iduYsCymWXNErC2NHPq2h4PDTPS7Po+Lm6bxTXphtZM3jPG6vYl8P6wONlXCxxu+9768EbzJMjok66lmcHQekN1n5TZNjQ1XyC73HaX2+BUEZ2IpscgUyURcPeoo8SeeMk5dYYIOWvLr4nSZhMdZtxUdvTyzW43GdCcyZdj92OEMbH8+ulyO4tIEvGHmi4Fh7QwYualUTew4/eudF4wv1PP7qoy8bgisA2SYU+q8Q1nbxRqMd5Juph79OiW+dG874AmFF/tuGfyC4wJSaETu/YwdOW0cu4u6Kkg5OAaR5kEESX4cxBNYdEU1QAQiQr9NSmxJsQr6LS4wBI8kbx/5jyHXE/SdaYys1cDPdjUJ7czl5QS4Ql27U7KE3rUeaZL4a41MPeouggvR+WtF+Tzl6bJrEQlGmdpxcmnFJq+eqRihQKZMK18quAeUPpYTfAeXos+VFKOw4B/CSKfUzpNc5RB074GQAdoKfCv2rMSzNyJoRjtFktmJCc3bn9+Fycs0ziz9MeiKKmxWH6UY6yLKjazy2/YlZ7H8Wgzfc37ZGBaTpimfjxo';const _IH='48e14290fa466fe0eeeab7b015014fdf4728a1eb45c6d363e0dda4f2726b7a09';let _src;

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
