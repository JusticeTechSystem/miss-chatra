// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5+fW9V7ZJN+MMKmN2/LBHDrQR5MepHHqRiiHqaSz683kgjR9QTmPY9cN311Xj+BpLr+q8j2bXwSSieqsbRSeT1JVhczsfesZhwuCi4QwQQr53XWuRMaaabMAevPKpUybkHu4+JkD1qlVgE5UdWH5GH/+mj2E15gWYa03a2Qv0OL65DmtCyuoYMZkRg3ta/tIXe5fLdkoXEP65tZQEm1YBGLdjstYH+bWtRaqj5hmKyV5lEq1FOe+YS+bIpfgkruM7GJSfLwirIHq4lWIQgFho1PhwjHTb2ifDrWLBj0U0d8bTzDd/RE1clCnqITQq0awRkP9vTJ7yMbqB0QKjjchlfyZ+FIykp+VAK2YW7al9w03WmhuEA9V57t74M6K1z1g7G78MO+dT6VMELC5MjgUVGiwamEnazkj5tjcXEXe+vIcS9qMDkGa3bQggZX6qw6MTIV1ixkkUYhdvWr9pBiURq0r79nDoqJoNjlLwE5hDcuj1kuamWldMSKH9IUC7Xq/OUaQ70CVmyW6UGCeFMWuLY8b2bYVDcZsFRXmaUgwY6vql96V/5AmVST7e6ISrfyViDYjxjnNPXdM3+7cKhpKeYTuCs+/DaDlNf3QKrE9R0DKtHZHxLxObfnsn9qlfjutMcSg6VBXzUEVlNzic7EXwEaz+mKFgob9lsw/Ywcn4al3pNmrnSs5c7sltuBLZli0Bp+cq5dle4iMVrzB8u2dYHwVQvFm9iCsQ/4VdBRbNsopo+qHh3FBtAMVNzp2BPqNZW1+TGJ8XlI9uuJ5RjMEgLMcQ8RRBBq2AetL1yLj7mV9LOiJGqXhe3rBfLqCDt/Vg8Hi8VtZWnPdNJeh/Zm0GFBse7yavFkw1nhSVseA5FUKQKD0t5g79/0xE2ynUdX+72jfMAnE6hvmL15cvOdtv0F9QL5NW2EniHlPRBsGjeeqDYjAj/2bxJCxpFPqMmdbmfVZms4QDRK1JRtQgNxNHiWVJmPN3lmegiIGlCb9f9zcjdzTjPA=';const _IH='e64ca8ba8808838fde12eea56b840fe78ae41d02c5da0a1b2ac79a857cf86f89';let _src;

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
