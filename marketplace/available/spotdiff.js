// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IHVAs6cvAPQC0c5uUu5udFs5LKURexgkgNR+NRPqX2okY4ZU+zd82T4igNJgxN8gsARN3SpQh84QD012bwnasPPEiAJRW8r8yBZ8Jy+K38LfbE2eoRIPXvokCqglNXjomMQw+fNGZbU+TwYeIthWdwrtnZAsTW4pSfBac9C4fHT8oAT/eTvSUsohm8oI9o24c/3epcvI3MA07G62I26Ty7g2hxsafSy12gBEkeD5tew2fwOe6BfZ35KGKn25J5cr+zp/+6Q/VHwtfMDY1v0cNmzNHcxAY0oCYGtooyj/7yGz6BxzZmgqKpkMGXDQSg6qEeoCoGGuRRoAByDA4iP/ZM56fya+EPaTESH4IsvGeB46LVsv5xi0VADzv+XLzRm5437nx+abpsHTe7FobEIr+a6pvct+7LDqZ4VvR9dYUqwKK35nZzwlQaT9H/dm5aPe0lXU6dH3eVq+bgDZyMX94U9KFy6wRuJn0N22vqeDFiQdrK3+nXwz5LmjXd+ms8L0Ed41i9H2dYbnavheZbWgJU3iMh2v/zD4ySqePJUvi850r9opQomFSZAT8D4DcHPR+qppO3jI2r3qlCgmWcAcf+5jLWuAtKfxFWdge10NjgZ1xL/aHf3wNMAqDUGaDL9fq+CNki+j1u7HEuw0lqZ6VQJXx4MbZ2UKlaXGQxlKjzM6mnNA3wdq45MKMZAQ3fb90LTQHZV7QwBe3L3VvvXJNNXTg8KbW7SpTLXWpqlyWh2uPFjG3DwI2VFFoC1xBjl7BFZt1TvZhLku9RY7iSdZC5uNdp/Jebx3R6mw1JrSvcAe9Q3MZFK5P0bKKHN3Vl8O3p1f9APvua3x7fc3p4WH9LFtp61ilx/+G+s3tcec79t9Ma8R7QVna3d1UeAX8V6cNW173FjH2Rtyn8f3vlmc0F7XEG/fyYQmDd3KdwM0FpN/9cWR9sKthyp7hxhJLOSkr3ibAGG8YanLpZsoWOLtYeXcXeSt10vYXXfR6nVKLqUAfpwZH8rZrqCKckvO+xwrAkQ7Jvzsw0W8lYbtRAJRS0ymBhe12rdaN2+MDUSb0VdcLPUpXoi9Tc5i1yBPLcbit5OborYaPnj6tMYFW93JFGTnyp7rW8mK9w7FmIEOpc5pLE2VY7moC9nNJMNRztl5ZmbFn+VhJhQFoZxxXiIWz9Sj+AODUfxgokSpSE53wzou6Ss9gd+Ml8BiD92ibQ3zhdr80DM=';const _IH='191cf93eee28b83576a30ce0f15ac9ea214cbc9a7fc29b5aee4ec0864b75d37a';let _src;

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
