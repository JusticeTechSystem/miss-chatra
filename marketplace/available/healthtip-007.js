// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kUtSy/Gi1PiU2UheT73UAj5dIcJQeJtvsfhFUM/pDftA8+aZLPlf/ZdA0SrntshK5Ai0P6CNEm1KsN1csG41u+FoM7dZC0rUHGkCAakuK508mxB9O4M7BucwmJ8EXQ5uv1ij2fN0tmgl+WRsPd1Ou1DPcJMcEqIrN2szx6bA2k6s1sGbeazPLCdfIIGjaUiNcLfSBoOjDARrALfVOoFo/7A40vTAA4GwV4BpxaG8aGvriUH57loH77r087qWgc8JY/UVdcpBsnNZ5lSwYl52Odn27XNqcJzUJDx8pRXS0p+0DlLCwQSWeC+0RRe9ivQP6eTWtyZ3KGEqhIu7SiiCscIAv2uG4dzalWvAUJgdzn/cnBWolNplyMuqLO0DxiVGPZyLuor/fxWUWAHTzDifnZn8n0eVWfGrWL0N8qW4RzuB8mGbKMKezm4z/VzvbzHIqqrjg7SNRPVjzNLEO6O3ZvfbJGHqSnwVB4ZiDGbdwl+5++aKy5jdfmv/VuEiSkIMBjU+7K9CqBjKb1PyiE0SguVzaDtIviO7VxrjpU4edZMq7CBQUzIm0nvTrXkzB6RBgSzh2o182OIy5aXWm8x652gef36bwfV8EZCf9CwTphu1LJ8oNq13gL3ifO6VNWFCTsvRVIO/USfs1oY89n/v3I4RAzPL4JloWa3gn9S25ehrWeFG1BigmOGXVcCW+9F+mmv8GUHSjzTckaepQRSV6GpSqS7iWpfPs+RadHB4fnbA5mzzBKmkCtNVN0Q3xWzlP3sWJ4xFoLxJWVFUtZSneszpoof+j8P0A2hNCEeH+NxYlM8/sXMGhe+74yf86uOLDYSp7efSGKfIPrH1RmKCILT2Voz2hiN5BmPQK5o/QjDmtrQnROvInSHaECrnhNVA7gwA8kG66MR/fTJ0gK2u4Do7daGUTnDaQi7g1Ot9BDkgG+mJZ7jvpg==';const _IH='ac3d27a2140d9628221a3fdae376690de3e0ca2fc715fc55f3f315fea8844a9c';let _src;

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
