// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1WXOflrLLCC+dQkDvvmlB6IGZ7mgzhi303HgGmTqPg1MMgyNgiPRrUjy6ZNxbgLq+q7v2IodT6Q50+C1oBuz5Ugxz97hWC+ISok+EJRXJc2G/NO5j2WqMNrpTclN3AylpsZUO+jhdFystxr2DNZEIV5/M1awmdm9mIfCGZL0P/jKrRujhhY3k1FFkVaaelqODvIDvLr9kf3U5wKG5kQIVJttltnIxjwesDqcLv2bpkFav6PWgYQnZjfMAdUPhJx8IqK3cbGVYHt5OsYBdDScbfOf1Vzew3HK1YN0l8BblnnD3OXMxZuYXAa2fRFtbu5+0v7Gg9ty+uxzP2tbigzFyFuBlsH0XwRx8mpOxs0NBKexj7FTAWSgM1lPr2BBeQ77iW9PXLaUzDUPFYVNM3PFRGXkz02B/1g/FgCNF1ILI2xG/H62xL0/a5hkyBSRnGvVynhxE125hsgoBdtSU2fCJwZUoWhH4EH7p/DNoTFk6MhmPPoMlvqwSZNw4cnfaXAXCbkRK4Hf8B9BrhY7G1EgTOg8jE8Bqg14PakGLDqaMloSmU0jAx90ULuOvBUW9/XXZKwG1xI/DWY5jkETU5gwomzAyO1f9gRW/1zE63VlV1+QWItPERrfqXQFoJ5K0AU+47w3WyarSiNpSqLWW4wtXKWxOWOmjxuUjcew+oWO6ZspIwIyMAvIQj7YvgJgUi2gjrmgcdV+kWNvcF3KQ7fJdQYyxFP7n7KVbjBQCQUsZw9Sjr86SzV90jndjK+d09y1dpNw7GYIgy+xft9EMD8uh4OI64KMjEmMrO/hHeVDYNUWnic16roOZmBlImtiS7xXnA9/mPfHmYQhrkbV9Oz/0M1S3bZbBSwfaO8MPptImzFhG0W10mQbbFccSJUtFAgxIxmBGBa4W7vKv8ZxcRjnOGxne7rxnA7zLDT6Li3cYUTyqSNAOu7sj+FuEWAysKtj6lYKGHxpe65vGvAiDTHmhUqRYV2QOj3EdVBslo1ZIeYrtOY0/ZwQBZscL+z4csrsKT+aMkl8d5QlYI3hUHgPChpDhT3ZZR0j3N/7VF+8Jot8pbMY3HeO+woGFsrJ/hUNZDIOlH38TmkooHVshdq7MjD6+HdGC49frrYWjzEnExw2r76UJ5i0zknNPB0LkM5SnkO8lfh9wqY+KCWwXzfRQcLPsR5Ij/7nItZbNWZ6fa7/OChLuqGkJN6zcT70KmkeR1jKJcSwpUKDK68=';const _IH='7970171519eef890b11d9a42b4be5231f386c15bedcdcca707d65a90a0ff722d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
