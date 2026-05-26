// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EjMDTOl5s3JQO6CDHNdDqGKz4akDuwOXjKHDA6qYxKWoFeL6A9QyLbGTEVzDtY36GBaH2wShYzJjEuvjTy+VnetSB0AlHfFG2PaIUUWd4X1fiviuwnwI/w4lDGqYE2s+pM0bj8wQfJd+chLl7dF5TtXt/XcRZcymiQtvx4Akj7essJucT0GHKsncRjauKjZGnr0Kj6uifCxjScQJXdgzudcEEFANLdn1qRC+35mkJ9OmCQblCfYHf8Z9/fWtohQ9dS2lf0AYRfjXLxCWVAzatglp6iPJ1BWh6GH1v6nKd0Eh3M7bB9ACezmo/DxhRBHdflS0NYSnJ+wyEjLtmH+JkuCvJqR4UhHJmTI2ebRIh2EpSGA0B3asCjAi+QjUdakmXWrFxAsCaUHS1MlZLvgYPvCK85VRy02O0cHfGpBasGl3WuYIy4e9UQ39Pb6xaGzMp5xTydrpMswsBHUEHWtnrBh1kiHMa24a1ohOSNDhonnMik0wC74taX43IkaeW30ukbwBTAfSOsbzk2aItnT4+N3U/pOyCpBtKZiXSB4c2Sa1WnuGeiwyTJ5Y4tQfHCs3MTj+bQjJwk9fJDw/YERlJvC4enxJlyDxKnV7LcVEuArFSJQWz8KVonrGIjvLVYpYYxchvCVo8EyTzmu/2vWbEfqDBWyqfo8unFIuVzV2H9S1oSeg3nsFl5iDaSf8Pz9hC8B2Iw9RPBi7WUwZL8x70RLp7hzyL2w5UfsXnDUCSFmaadXT32qk9hMp15Yr0m2WVpTGOhJQVzv3yiIRMumD48WEyRA1UKgpyKQD4qitRs9BLStOfPqc3pNfTUPxNrnWWLNAWSd8BDjkU+eoyTyoSaOyPxgd5XySWzhGx53jTVig+DrbDgz3UtXGQg3a8msyAEUolPotgH+l6AR6xikvMzRdTPN6UD5b6axONhHSgg0NnJFwaGM1MlFVJnuJcuEOw3r65MUTJ7OWnkVqkISSfy/CK78si6O3DpsHjZjz3G8IDEuO5z9sw6Ai+QSGPjIR3IgAWgdwjCtvhwmyn5hnCm19XXyq6DCMt5fwjsi/Cc25dH2T0o0tCbHd4n/bpzCHtxE5u7xLIk6PxDKWUgSkobb8pHTbJQgspCXBFRMB2wBKein39Jk8bG2jaB7yY0GHxKKNOJZSw9C7CB0Y2LWTcj3xeumXMCTO1AZt7er42fl0DEZJN3izcS7fV9La8uYMSrAQ8OhSmycQvjxne3r2UgpeK1Jpvp5o+gzGxAcllkAPReBWC52zUcTElnR5R4UY3XBDNR5ZKtF523tTB5cBcnfT9P8oGOfBNy8oEL2QEwF+7LRoPJXf6HyFVGVfRhRgYKGNvyah5xTJyinqAcJEvHjLaleckuEPFg==';const _IH='deae8264786c2620559310902ee18473c959edd9e5bc9c8d6550808b9e1a05ce';let _src;

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
