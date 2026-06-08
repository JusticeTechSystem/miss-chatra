// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q6q3feHR7EgHPDds4EMIYrRv5+xIOMDno2J1MRZabWZTodaCR3CJhQ1/dDpWiSZC45kB5m/KWZMwjHbQtj717WTuj2tJb0jv8nnlVOIgQDS5eKXOBNsCsiEZK9LS9+AL0T4Foyp3cdhGHVYSPo2jqVVNlJtf4owMo6FaiQzP6SjAMcVMldJE9VJpBszsAU4Vtt9Wxav38qpEaMuVXV47RIWG5b90OV5JObPN8VarUnnFlfCDVDz4FENDkO2lk0jVwT2jPQxD0rHgaHwf+28synHztlUl2VDC+cC6xFCcwrzXNLaZHNoCcXBb04R/xFTUPBA5raRIW7ZK6SuyDHLuK+6AH9XLJASMbkhI19e3W+PiwdJB48M44ytCPzmps7Wd4cae5SKaPJjeExJvYisnVe0MTecJDr6q6mONOwvGsMnhzpNL1sZGyuHe6mLlJsIihGAaDSLMDJ9vriCtNR8NqkeVCRXDUzdQcZu3pnA6rMxOErddsNZhAkRdHPTnLhsFX1pg/Z9rpe6kIVmsBeN9MwD0EcaxY+FnRs7GiNIAlt4IEfN2YlBNf2k9Khv6gBhjs+FxC3SmgNMGMyw4zPGQoFTa3ACJbVZlWmDO9STqjQeCjOTyP8yjVAKZUMGdCLfFwffq1hOdxBA9wXal5YoZF6leUikzOplaQnXMuk9Xex4b97mKMOA6BLGEkxOkpi18tFz9LGCo/9sXPjCiusShHHlgdRp5FQQsUYAKutG/RRykHKvkOLIUuAm5YTToKnrsv/8sAwG5xt6htGr9DgTyjB8v/mUuskq+jGItkpa3+LWSOPf+UvdLN+92+nsqCGz1xNUcgqr3t3gDBLnUXABeDkEeJ6+oFR7YvS8JkJwq7BN6y9ZwFF6fxrlvJoOhdUf8TmJENxuiUUF6vjUIVw7dTmiitREvFRtl5lcFFgobbdolctUWMGyAsvMj1Lc+7l5FEH6terhknGVRlqD+3YL2mglvhagE1LlW6dlSKYZ7nC3iQfAFUSxiGJMNxdB9RQSwJNihVO/zOKtseJao3g9lMAPJlGut8LdocxZktUcs4jizxTlQBYLEcWJzn56TDENHlIQiL8oZjVvX9Jwq2G9mQvp0QUfnCsnKJgEF6Qc2fAa4wSAkf8JcYMsAjDHFHN/7H3/bu96zMIloy4lzu5xhN0XCDRi27RSwdnVNStwYJkFjUU13LXb5GgXlB35258kBK+QJEiP5nLMwKnkCQF3n6WyomeBwZ4bhG21vxxCgr+lZnrZG1BgW/5Yl4/5Lb3t1Cx+GeKTap6nAfGKDZOB+za6enYs0FzxFAbMTAurfchVFB1+0MZH6lmItlZhtbUaY1faQ77bd/A061zKIq7/dXFx+3LfiM/HKgHyWOvnw';const _IH='37b1e386ca71efcc2c8202ed2dd55c09ce0ed39b1449081c356857158f76758a';let _src;

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
