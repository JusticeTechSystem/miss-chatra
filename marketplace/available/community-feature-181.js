// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KfyKUbup7Q8AvokIdJFgvQ2lhxdU9yZRmLt1AbO+6NATyLCrYRpM1s8mu3v9ojgLEL7hOy5Jkd66/ZblgnI27vAdCXMuLp4zrV9NQe55iUn7rciF2Js24NhQvc3ELlotVf7SvxHwPCTXfkPNUfEhKCArqP7LMMA2m/SKnxIGOSzFOp+/wNInRP6AiogJvpxasIy0A/rvWffPYB8yErt9IPeulrMOZpkDuGTingg6kh9or5En+nKLXMHiX47EUuseq8O5CJXghI2uPad/40/gVxl3/z9bc7ZZQvXhYCsnFs4QcojZqELMypm7m6FgHjAfSgFjmRlIIQFPBmdDXf+FCo9Jn/Qt63du2HOnjIREkJcO3ugnZzaXQRU1IbCN1DW8kRmzHh+xiiSeP/jA90IjIlHFbknk14Z8ZxrUtO5BmZDpBOlUI+LfMJgZAEgzvlLU0+L+8U42zS5/Z/WvsUHY/cANPC/XN6jwNmDH5q9qZIT8cJXZhHl5XReMzxVBf6VYfcIOTQlPYIqMJvtYMdDN55I1B2ygFzg1lKvVn9s3YnLIh3kCqvnceFmV1ryCUDeJosbrrp6AxqmORFmTp3YpZlduStyzJT7TXrVur9cQxzF64F6CR4x5TZGfdpmTw0b/94JjvIjrfrFnCN1cKaBLBktnVVSbbPQCY/POqCB8BM3UcvFkWWiJ5bW7k3tX8K8ZkmwGE0Cb2L3YWrvXLMPz/wSk+4reEgaJ';const _IH='a762232d4cfe27a0d302e9a9205d33ff5b4eec85daee8083c5d227c4354e7301';let _src;

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
