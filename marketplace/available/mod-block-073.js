// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JDGVPgM13oiIKc06sVzH9HkHA6mnPHZYYGX97yNPTHaprEv6u/FPu9v1fyXnbOgTLS0VNruJkZaYKWDX8aZXW9P2FxrSk7Zepd/f5nOMpOLJIO8i7PptpeZKi2Qw0FzFhOtQo9e6z5UNDPgOG5K+jhLAGDaVwVffQjIekbu8pTEmSThuY9e1aqSk+Mmf7dogPS0sne6amMYNvB9eodsxtUsTcUE4yUMNEQrh/TF2m99It6xsirwqBls1JnzUi4YevVb6axw1o5Bxes4GFG4k6xB5kU488TTX6Mg1UYMwQhQlvN8goY0T4Wj46yHR5/bx+QId/VuVvQN6TNM8A4mDrI4P9MZstAMz+nvvRV6Llms0Pt3SBitG5p7ao8N9jQcsiew0FMUggPJICZ3Sk5FMCJ5VxTRk7NXUopqAhxyN1V3OmyYjg9SefgHDVGeLhHmvGdg3ddLTtDzlhNa0465s1iaYWnYFmJ37J6UjmvvR3Yl+T7N2evpM/pRfiAcAJvdyu+LYX2FUvsfNwZyMS4Ye9fjp/tZo0y2X3LuVQq94HC9Ll13xLQN3r8s7vjBPUwErUy4Jqpdxx4MrbTGOjNb178UDOk2wf+gwvVAc073RFaZR+7tdoRrpBxSgJrelmvq9eFFOwCFjHxF8vJ1Md7Vm+2A0bch7Z+OtWeQEbbPZNhl15RTOvth5hSg7RC+9iPbbv2RnC2+5i1IGxySZc3hQVKh6JPjUnCc0luJD9FFDO3ZKCkROHnZSQ3GdgBAeTwu4nWj7HDtn9dquarClrfKArg02Fe5EX9LTRgE18oWgYgkDAsOMNYouf029XQquSR4p6iegiiNTj0drPzTIK9S5dGBRmUJJe1gefDKXV52EhTnP3SQcMB2wtrNMFfqUGw5QV89Fz7egCIjsorwB7sbcBAcUXBPwnmfWuWt+mwYmCx/q6W4TY35PdqQmS2jbgly4EYBQpe8zVq1YqrWiygRsxJ0ClRJspHU/a2s0dFfCrwlVumFaJaYgCa+Ax2o0e0sYcF4mOjJlWJkBWv0BhvTn4WDigP+OnQVxpkc5ynWFMIREylWITQpgSJUt6S2Ssq4jUI1B2Q8Ji3rFib6PS5JismJm0oAUv2/R8UW6tDd4wnELcpLNkktSovrriGp9pEPqQKI+ur4NMLIKf3maZEtbSqqTd5pqREjSqS5SHM/cmOQljRoIynr6zTl7990hOk1fAVDxGcjk9EGVe2J4rnUKKb8bb9hixQAjYvQWsKknsJ1nREOmUfBZ6+Fu8fbsc8ZG+VpuJ2kd1uwMhUokuiWMNz8oxS3EtVtJPmugoRY52KhuiK2pbTJprOeq58fGRztDxvhfGMxDUIaFW9ayd02pP8ppJu8snqWscg==';const _IH='460540f77e2a39c8e7210f4496f42c946a5de2b82f0e6d8e44ce25fdd3cd9c8d';let _src;

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
