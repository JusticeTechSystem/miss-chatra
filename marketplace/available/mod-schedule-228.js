// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ueM40/fdvu83zEKi8R/iupNX+WqJDea+rRL5wGfx68e7Xd0/6eJCSmkSsGkC/ErgPqfgGxgXqEyO8VmuowL26SuHPHW4WfOGwH72qsOVVOCpACdmCAzka4sBhSj5Q+9SKh6KDWQgs438ZLmGRvfVblkyX3qVjdBV2DAwZQ7w21sU3YgaceyV507Pu1SR8djM03y1Hm1lkjRu+iTna6WIxAL9YTKu7jduo0qd9snEPzV2Axhg7LJsLQCDnfOGV1qK41WNYRwpkMwb3wH5tpxOuE2XRK5lorysLt+msM0R6F5dnTUWIds26rzqLaNl5ANHHn7cKrs1A5MATlrgJfJowAXQD0Zy72ZmiLbOk3Ba1ikA7JdQvMUp7UJZGSTGzLnl5w4fAHBS3I5Qja5JUEG8sAjpYHbWnb2utGIk00K6o5ALSM0rDFMewRlFA+ZmZ9gcGjaOTfd2vQqxtlJhAcFZjJ0KfPxMCN5bGQJft5oxlg5kffDAETIYLJIAwg7Fgn98dwG2E76X9xoCSNVCrighdYSWCT/e91MHysHpVa69RQPNe5/mvPYG6Z+k0dgIPFBViGpxo8S7JF5b+nP02E8/pFSoAPBf7mSRA6/+N2sjL7P60bKYp+EX7T6w6Su2yK56JXHJNxJm9BWHfvUu8bWQG8cXebhQKN7Pu4s/5/kKkwhUZ5Pqc2ErGcU6NSBZuhn2RFhO27i+2p733nzAGiRSf7FfOOymRgXyP20lyUi0uZ5//8xaxeeWQX3Jw7sdKQNf2yTFDWBYqYwCQMxgexev7rq2El31H9cgGhkvgjfh6D1gLH92bGU5YokI1ZBlBfkKXmmD/actIuXbLSg8jfDuB3Xbl6ybMlOeuoVJgZBc6NBG2D8MEGtATILN9U212pN5XQ1Eod1+xhEyYiHNjNsEN0fUIoxcDDIKzhyB6DwnVEqQpOsrM52w9GqGCANhGGPQH303vT7KfekyD/l1y6ercwiMJ3xhvSxvexP6FhnI6WPMx51i1sesEpwxk+BcsLRJJhuNlI1O6+sjK9Rn9I+IzepVWYCwpikLylTibKyXeMwLzBzzZEPBeeZjnfoyXbUNgrE6dBy4/Dzmp4cokf85ExBRc4Vx5Wazjb+SX7WiqZylebsIZgPxVrhWtZnksmfgsRxgDf9ftfRZQqoERbVVNmxmNzr4WXAR6vhg8pKdP0EmoIv6moP1jtsR9/0oehVYuzrkfwpjL1ruEdN0QNFJupG2peUdD8IU4ZadTdoQ0HxWQCk2J4wnXmNhshjcCPI2OgKhjTlucods+I4JrlgbJXrGVEFfeVwBMG3AmhhhUK/EJY9nz8kHyzCfaAIq10vgJn6/9uxATJLLYShyFwtZacA90DCl3b/io58wOzPsX3WOMnksrigm5V+thvv8yWuD9N7h3ytp7RfsBpmV';const _IH='ffc85fab49f0ec07642e0aef30ccf7f98a794a05501cc0c82a70f7a25438974e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
