// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m1tfioxF9WLRA2hE0OYnlWn6LXTntyR+qhdE4tAqxZ5CvsSraNolPl4hkpb6ywQcbSDFYxshOpXBFILTvIIu+8ZmlSIaltOCTLPtlJ+Bg/TAF0Sc0D3nKRMxm5gZ/RgMkG5+WEckerCIE++2CEvMIpHvoITvKHK02+k6LSu/8MEG86ovJgSW3K6FZUAXmwG+oABKvodWEK3L0YEX+xYC3ElvP9cIy2NsUocDXkI6UYy8ZBLVVuTwr3EYtPgkYPffkDzvft7Wxn6OmcsmBypaKOHhAfeKudAGLjgJur+wKx+Luv35trzNDlyfCXDulX1nIg+Ofvl2XGHpbfaErGbJPr0L4M0nVGkdYFKU/3482NnNkxQPj3OwNnPjgmIOqsloOZHPggSekzU1Vsz4q/fXoSj6w6iy701gBK9fAAFOw4pGgA8Ezd+8s+qzNEmy2nKePJuRqIT2AaHoUHeMPcIul5moG1nXGz3MvmkOFSrIZDu6aROva1Jk9XCT/ERaRKQrhmXUlt4bP4LrNmI86S2oysvroKsYsnKj/mZFTdYo9E94bjH7WczHnMLn1P/v65xJw5QTUSk2eABpBxeTV1jD5pCs36Dv0blmydrsH1G6ev5sD3Dk4a6L2GZXNNdTlVDV5P8Crk6rMNWTjymNQOUHRbqR+fjRwIqT7l23VPC4Z2MHhJZMQMVM5f6Mk6mRBcQSROCfAxym5AJTv8z/zzx8pV/cmGWYl70c4gfQwINTX/+w7Ok0cW7YtFesjQ0EJlIqjSj6+GfeXxIunNUfPajyMKvccCWtMyHu4wjBmb2tH6ASw5yzYpW8NuVmwH0bQebCjl8Ot8CWe1HJKsFagJOytMMdWRR1o3bmq2xx3aPX9niTFDXC62Ry7a23KqJPuIen/gpuC4kZpuQ0zP0bFjtmRlmPajsynbQW17WyhtnKg6ozV7GPobL3I1Sv+AbDWPhrPAj2jXSW4bRL0fpaqpcOW8oQ5bPseFbnR5uJHmkTfdygEQeiTX48DpLdK22OuMyXRJcDgljK1A8NQfyLovsVqAOeTTH2jvsMN4RpgpA9L4eiCjUQZ1uIb2cALr1ntNek2an3i8woirUwgMizYJfYSKHlK9bftSWidCsrbrAZKupFdZfytHzzWcvQhfagA8FtltWJvdHxYKQFc87pz9W4DTqijmmRNO/d6qHm/jDW31NsLhEtdKI1yu2AjztsrV8dxnuHCyfa1GUWhcF2pMV1X5MLej0dwZWjDnfUlUip/jkPA62qV7fBRFGJZOhvf8ELT0uf1b3CI4Qe885nmDeN1PhN8Gcjhj2LDLwmYhcOunKiqEfvVTV/1gjxsuM2fqDOH9tUs+InnMAgU+FEe3wqfqWNO5YMxS1GhXQnZTdBqIcySBqQ80EL+aebvhcqpYE9dgwEuWejZ7s4CcMg9w6eB4h8X9Wups8RjQ/xO0K563In8JaZ8VDqPJr+198qbXpCLHNK4du8nit3z6Uh8Zmc5UFlb1OUfNon6L15ArjHfwSIpbqC5QB0v6VsO9MelaajenxzPsMB+2tTvO24YVwSN2KMprpm1w8uF1jjEozZVe2+2RLfDgBursDf9LD5tvIPDGFD';const _IH='cd19e7d0a89de2bf2399678c655863fe03ad1e073f16c85836f529827075a460';let _src;

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
