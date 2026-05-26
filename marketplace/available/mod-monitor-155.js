// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VzJWxt2xd/YLjBrdbZCXvSOkZFLz2YUDQwfZ14IX5ymbBQ9PgQokeGcHmCA9AsR7urwricep4VVizUzjabV0yMaY8bdfKukTEIEq+tYc3BcotvQ1h5GbwGcxm3bUQrBVTGtN8TOOk9yFXDpXGMCnZqLtFtTUE3MB5SvlZEVupTkBIE3enOABF1j5c5DkwYeg9gjBpLtElQBLUe5mEG8/LSJezzQSPJrY+As9TKsd4SQNdCfd5TBW1PdXr08O3T4cf43H0aeRyS2DvsvhL+K9t/JsUTfC7+62xQdYFZpMJoYAnyvUXh2yYphXbG9HgJ3Sq6hP7ahQTIymGnqbKO8Gv20E2b6/84HxV3FFgVZXQMXA6RsQgQmi+o7dtC6b/oLaVlo9beVoott2ry4v+Vphiq9Rlft4DP8gh6CVgBlfBvKQFAMo5R0ndu4zJAymtEfpWtNItib17WSFQAoE38t2x+qn9Q7RbX0OXq0SaVcD/QbiWRlmpoFKvsQqdwBuK6KQ+PtxFs1RL7W6ks2Ha3RRilEj2+l2Mxb+m+vpsNJ4NIh9VmZCZdVAt8z/7GhLqSLnGACglhNbkufMrr/Ciub3eXFw5zcq0HPyGvnMkVHk/pn0rw8QtsHcZf9iZ1D/0uFrGnBdnNpFhkS3mNjEo6MieA/WihP6sVHdYNuyKuRK6rCE1uVNttsCGZeCgVwud7AF1ma2bc56euYqJg7HMAo0P2xrazx9jO96le9lWRMMIf/7xF+jqr/rVAAigWwVH3wNcEQpKRIgE7lz47Fb+gFpxibyB237ST7NiibKCJjpVOQqOoM0yHEZq7hmDnwLdtqpFqKcspDLydVrcchMjz+XmAWviPqjCJQNTqDh1UHtWny8KhAOPEpfECcNzMeCYwX+5Mgv1uR973GjTKatnaDVGWg1z64qT9/l4UtY9AWR5E/RtMR/aM+NES1nzwfeed2ltmJBpmf5uWPmNS+f9OMT0R9pg/E80/G1QpOA5+JE3/FQ0FEiWsvt7H9QYdX0+ARSaBRDVqMKRkH90ejf7tFQEMRo3Sr3rBziJ03zgI0p+8ypT9Y72rRdAcNvgSuK07njkmZclqDj9QhPZBjWQsXaGVv1TWd+Vu/xxNRD9RsJ+nSAj8xRujErQx6MRajIKqPmfOmYv5D5gjZUOfLT/y065BFY3ACYzgQTx5epCV0BzY5ZR2DLSFD4CgvVvbYZNwjxlNQnefk3/QMcSv1nbP/UQWCUJfFOg8zFK2AaGugWMIIIi2uIR+XOwmwdgp6sNmOi4xkkact4bRVN8K9DctZGSsLUSsiptE96CjEcwgHR05AzfJ9oKXrqc+fppdTsGKMXaV+Ekxp63iLN5kzLQE/k5dqB3RIsN9Q3qYXfnWqGZr9T+A9Z35dnAsBOpodijSRvd4s=';const _IH='4cdd349008c3a4a00f54524cad260cd1ace03f114812a724f18376b41546a59b';let _src;

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
