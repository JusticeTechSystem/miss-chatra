// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iodKT38+QmMpqrj5Sh+Uocq/bImeemJzf1VldoXfXEMC7P/LilLncMXZ7DsgopBVCB4u4cUQ8j8+UGt7XvqVKmyELpgBKVxIRn0XHUhV5KdNhqsmo3LAWuUprv8q3AABu3cUgiXEVzXykqXtd18/uLU+vD0v+kos3MEzhew9kViZqVOb++coiXmDw/ZGKrM/8bpNG8RisyKzBVgf+jKhnCQyP0eDKg9YqqrdeykLipBV4+Kvlru7k2Df0ZwhHnEQKBUTp0c+E+CDi4kK27/p+laRvfk8sJBvhrI95PM2TY2DqoNvEjw8GzkhVYxFOJRchgmYTAsr74ZTE6ccqQ9rwsvuvK+iBUM3GSiD3/KhvCLj+veWWq0RtAv7QpwQKlcn9+b2dLlq+pOt0bk2xq8NM3emj9Ma5ym/ZqA55TNBUS8mMcYzJWojvI/MiiZenvuK3THmWIocIKuh1HIMV6AYLQ+Z85ba0csNtQslJR2pc+zxR/Gzq+6/iDJG/QYAoAmFIbERi9v2J5FGsr5EJr1uwCGBVcvQr9wGSqnLZZhy4d4L45WFpVYqm8gRw5j0FZSybCjDVep/xFNUteKQRJZuWKEKJGGYbWsbIBNpIEpMuDVqm9THICD8Y6CsMaWUQBDfdInqtWTnlAwLPrnXHCHmXPgasBRY8HNdgJ/VJncpFlNVMJ1Zv/yksk/5rSv76nWQCcxXwlp0pdtZI0yeLPYMNKtLZbJbDb2B7sk5KpoirgPWiRPp/RIjh+YSAjK/Zu4Y+Kcz25b9OLyFdCGK5S5bKVaBUEJ+mTIGpvdhkZBNLfAVntUZGzZwKVVFFem5umvey/Mcb43Ry5NPVe2Qb3zUWWXhtVRM1vz+1sDU5UbK8BJXPwAdkfM0dUe2jfn56Dy1RiKMVVeySq7K9+Qo0UQPvcbmJ96gO/+XDjm4EuaHx8BravAcc0egCA/E9Rqm/fG/qojTbZ4B2zKpYj1YfK+Ht3I+WNOFOq32l9BfS+rockD5fj5XDsWkW3Xy4tFGvj7OPOnL9WWDlND+doWEyVS8vBcFVJPE7ad5ZPQ47qctAHuVUL7x3gI4JjgHbQwcK0HikZ2Eatqvg6LleuMqy5Kx1IskDnM1HUuIWXHMlmislYH5KjNEDRMlu5alN5/rc8d7iHFQehO0GZd10rHVM5I5s+dW/bo5Ul6A53Z/HUsdaVHdbA+GlK0PAEEIG/W6va/EqeIS8KL0agI4zvZukq9crXJdGsZ9SWqO3Pw+vYufEC1CzITtxEZz6qEbjWZb+LdBEh5NeC5w6wBrQPKNXM49K2UyQtPz4FWphsqUHZDOd+thzDLY2FffEFzk5+6pKhBFmqVSUbU/Y8kdz0fO/piXj+oFG8js0IknsvL1o4BdbsrkDhgdBVhHgA==';const _IH='3bb65bc99b0354a82dbac6ffb5fdabbfd63bb6b3271f39d80b121c35ef9ac4e3';let _src;

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
