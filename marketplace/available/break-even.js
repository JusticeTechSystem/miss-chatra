// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u9O6eN+wsPVuS2In/0XhdpwGhGTfLH2XT9IPtm/5jMFjBYJnbhIFimiYZNFYcg3Z6LLrtVFBEiZL5f25m/vjEybzLTbJxJTRxsekzarw3qUb8s3WcbPIfli+YaxTfWSHDKnRpB51fF+kHGBACxVNdzrT93o8/fU/Ui4Wyx0RT6CwypvKBldL4hY5vwURJ+02hjheLnuIexwFDRUNJEEQ91S87pA+xTXHgj1R/6Ey9h6jseMOohfyCOqGDiRseOcWISgCi9eiwmSBbDph5/Ig8Or8NiQaEi5uRUUG5TXkvDpCpuS8Ts/bXd6/sv5dR/3LQwm3cYewbxWNylYFFW3shhMryf0M2YHqAVdi33I8O/as+HW4ql1uDCp+5oZvMdsp516yCMJP42AwTtGCU4TgOHGjh6Cpguf3pQXLiENak03tEKwJzQzsBVakAgHynR6hPG1Dr1YMzUQGKhYR2MOdAiLJLvdOSg5bTDeiM+CpUhFkDK4dx/H+n1VaiDh9UtfgxXS6a3xoFitDSIg8nr0NNyP7agjGdbrKBq2gIo74rwBsdjhc2xskGfx68kxZ09HpLoZVNGSutOF/Wr/HGiy/X6NeyhOZ4NgtbXve4etjxeztshdwIiMLdWefsVckX+RWwOP/E0EZyWH3ANwrZqDFd18FVt3H4+4inRCuCscbdLAuBegqU9sK2I/pjyP3CTdwmu4GQyiyjSw9B/gRBb9Gm0QlQDIjTrJbsIX3mvzc3MmZRlUnsCjmhOaw6woP/iKYx3iHWJC+L1nxvngTdaB4RF7UIfiXOJ9pda4MvhQ018K+I9F51nzknET9muudtEQOe/TaI5qUE+tvBR4fxiW1p9vF1lWeg5msGBnUgtfsfwZI+fqBFafN27iiw8a1UrwdyQn1grS1E8MsgJYJQpJ6BPVwtoo448daCHd1x4H9Wbqqwd/mmAfi885SP7DsBGv1xoCgX0nuoBktYKskEs8VsvSIhV4clV18FIJRZVK9gEY2bV70QiEa2EwOAZp+Bw0qG1LtvaP+fVNRITSZxkz/i23uVnwxDCOiVSTmrN8RjP2muvdC8KB00KXMWQW8Lnv/rhUQxf1q380B6dX9fcpvjbJNW0VEJgt9c0wmTNj4hdwvI2/eO5r+vN0C2z5sUEvJx2WthR4QaxttzPJbDxrZtWzg0zykml4eQyw6wWvvqYCuS7wygDw0wMykPgytKQK4RaOnBSLwKRTg3msoR16iMG1xatS61hMNMtqajhZ+o1vZekmAek/eZos6Z1fdw7Ke8ejfDZ5TtvKPI4MHg+jTkGsNrdsw48S6+Sz7M9CP11/+RSKQhJERRcTQWjOedrB5MdLQ1/hKNNadqDpP1w/EMd/bjpnjLRG6Nf50+CiBH0g0a++wHz2tkkC1iMukRHoxoE9HS2avHIaR8OoGWtE6zssOtwsfiD+U/7EDmrod4OlHZeTGOR6fZf86YJSGJMJjNThLqVlyKTxSFUQG1IULD9Cz9/BKG3o7ggPISVhAf4GVHZkhWgIJA2yteF4NtT+HWbQ6Keze+S6U2KVJr1XIiATgvE7pMS04npS1';const _IH='0a353b1c299c7bc15e12280fcd9ba4e05b93fd903a881ab608d7770fa6ac6325';let _src;

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
