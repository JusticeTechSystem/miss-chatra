// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EF6qITSp2t0Xf2LgfvpH6qp7Jp+e8SOtBG3o1f+ExKJvvj49W0utpPJFSaX2GkZYqhwBpd4n9CfAMXJzjvFPr3cAfEK+i9KmcQf5XtJoy0CH2E8XIkERM9d4xO2w7iENrCV36BS7/0Y3uQAL9a9UMBJULpytGbOrxOJRbehWmOjBq/WaZz6Lvd17R2MWOQ9Tuosn8IDzJYzD6NMZMEmSe2uCqdBVKHKb9zkgCt1viYeUMEOufEHr0tQoKF4+yQi7Xw+Ri48HCD0dHZWBjTbI6Xvj9/h79I3IPf1fXH/rLU0nK9CQZr3EDppk5eXCj/R5xHRuirV79tqbhcWIQKy7WFNZCvqeqN5WyGCM1lqghk0tSA+GFufDIzv1q7Ddcdt4c8GveoVLPpH1C25CZVGFCVs952AJhRNMb+NRnXcSsvZGeDrtMcZZrpGl3YRbeB/aGVU8sqZ+24MQRJm9E2WePGqwKdEPjaedyJtix+THjdludWYGd5uXjNqTY71rga5bvd66W9h1t8PwL36NGZDKuwJ9lEzVIDGuVe82mIJqoP2B5C+KSU3psoXWkcBjeArFC+Smw7ec1+/79aULFrxxMyNKVntMhxWO+XWEuVt+kE/3xkNf0QOhPp8qxdNC1OUqXhTv4oyAUmrISEPZu+BzfU37I1oPk8lSuxjkHEOAH9DQEJjEfcOV+xM07+k11lular/j+hvyJkSMWLSaWT0LwQFgZCu/N+gu0RvI+w2Syhn39auSgbnQkFtOqM2vWQkRgT+MYkPX1k9wLpgH2o4jqeTTEhal+8b1pKI7zxUwwY7zIqfVIHyjef0IEhN9wbr4sQAWrZ+AyCI5ETH1qknDmWZWQkU4i8v/ncWfIH8crw7Fju1LhohTwogMMtjLP2jkjTQS5ctZqBeMBWti9HpEv/A+0Rr/i+0Naizao+XKLDCsFPPgKsoHCTOnTmLuMryPzQItP+lXO2yRAWL4QYiugEkRlV5110OnCji98pa6Iek9s9wmou0OFcXEDNdOxehIPWITpDCwvzynkCF75AOYcclLM93zJ8srpbzOD7w98MwKGbjh4TjbbEVE1Gi9/ppmMCgdQgUKBng2cpks4JlvlvHYVkqaHHtGZjAw2u3IV1DCOf30TQEkONeTDmu2lBPebRNE8OAeBJ+9UZ6V7IDbLy63ndnSOyV97nIJtI8SJtg4POs2uWWVXNI+E91aQEHBK2koWIoeKoAnlobwRiwIPrMx1WtnkTJVc5OqhkH1IORLAGEWYDBnRGfyz6TaG8JMRU8uhC5zoXhmyHNvw9jJ1AaFPoF45ytwVRJMbStr78IgVcP+4iAyLienotr3agOMs2ZNObG4tWHrPfx3kAxmWogoHamFYtVM3REjQGTBHykW/ujqmlWOpoRuVsN+';const _IH='1189129ea15d24f59f6d7f7d4eb74b8f8bbe7d53e121a7f470b794074b50cd3d';let _src;

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
