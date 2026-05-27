// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='44xBeP8ItTMiAYwAlLKWePKw7QSK66/TeSGkR3ogTZIf8UsWj7BZ632tp2GQxE7vdAcD26Ie/l2uQbR3/w2xigV2iSlcoSkTQo4vDkGcMkm2tOAT5tgqXQZo05slPvYuLClvoQ2INT/4wM6qDuu39lAQ17ai7IibhQXC5GhWmrdelCDDJEuEVPVUAcYCwaaWIyoxIstv52JmiAWKo3yFETmhp0G7hOaofUr6Jd0b4lVyQVmlt5WuGK91eUue6mMOl1MmF8c9NKWGutSI0gZ0wtbktT8g+XvRipGNX23XSVCeBajVQYgE5X5eYCI1UcUzdJ1Nr2KCVkYgcZxZV4BCEOUxAPEZee3ybcsOPOQXD394QZEMlhJi9Cg9R+MA4Ha0R8fq2nyd9w5MTJd0poP8KUA96klVUPPPPPW4Pv6pVVSKIoyG5c6m6tLn60Pw7+f/BZt90/QyIGoBa1PBnUYCQfDnTw0efEwJWwTqQUVqFxrlduAf+EYnMcDf4S0uXOrEQtyvult/jvUMJg6a3bI6y3b4yi+lqyp1abbkvcjyqn0fjnf2LbcHinWnvMOZxWoYsjKj8l2f/2Zv+JJb7bZbqmRZLKhCtEq6G+mwSjXrRS843eV3ytZgsjM8GIlixKfaErLUzGmJ4ZmR2C0DuocjKRY0lPqFS0nasB0x/x1eYno+vZ6CIVkkgkkPSMbfgsKieIAH15yfNrVMg7/VDOytSkAGSKms76Nm0FSF0P4Wv8qnoYmJRnTDzygmIVBYolt4NVnSWoubE1F9G5yvcj+Yi/jn556VI6hTQKHwDCpLOKGk91iVkCA27xSem003qB4077aPu+Br2qkXn+QJdWwdAqW49iHFq2UHTPCGKQSxKzc1GvGPno+p92QGLDiQAEeW+vtNK1glQhS18A3pNiMYaMr6hHR2Jel2vLVqTvMTpeEs3eddjI4y+kShw3C2akuuuULNiVd2987qZXVgWC8LmhDLYy+Pqpkl1D+bTUsaSFozsowsKH7S2WwynRCw23grzAeY7OKar70Yv2EiYlFhaMZagAmVTo3TUgsXIcaAE9zj8JU2ZJQCxiMXJxaQSTgpHVGDRxHtG9/e34PpqeymJFpuLKi50DkDy9EDu0le5dh/DyHMD14fJVC4ntcCq9vfvbww+3smSpvCCjhAzxT4k1boWIP1MDsIJkreArnBvXQJ2bikIjNE6YnvkXrfsIsi8pU8fbMdYG+rlECifexjwiPBhF5NwvO8T1BVaKw32K+WctkufyMLSRwVYXNYgF3PBNW7ZnKcxiBV86VhIrV3DWRvAsXh4Kp6YulJ7GC4vkz+dWAnRcvxu34wxW8COQVjcxf+xnmQdXOe6nUHBQdMYcae4JyKNFuvm2flTYIvp+OTwaU=';const _IH='a8d1881f2660e943132480323d39c1373afabeb48026d19b8595bf00e30b24d9';let _src;

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
