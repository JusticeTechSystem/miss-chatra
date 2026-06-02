// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPK1x0cVbeip/bJiAl1KQlpXdbZGdZrWEMfO49cStdAE7QdNK5VuTOwwP+teg8ouinkFTpdNytjt3V3sc9TByNWKr8wjnIVc+6wkMXkt0vn3LsRZcVBLb3pBVVjX1b3ssDO7WyEATSqHMIa9bBpKgqBQzpEca0qDX7qfVYDBr9GvqJexR3j3sGjImenhirBCUyfgUv94Tb9Bi8GdvRoMUQRxkr2ttFUcdnYF7S1WFV44GOcQmFw/x1vKlzyWUSCODO/I41Z6Qs4nuL+Ww293FvLE8hRgA09agkdW/N/Ab5cuiovWquakOQRmIp5eoII8JpEtiKLphcyU7IBBMT/zw46TtgE7/eRxJRzpySzHRhk57z4fXkmiJXMFElA73fcvUVbdtri2z6gc7w7mdL7+4xDU5izWCtLVpB1aErPGMoiE1lEGmtrcp5zF9eA/3tMYSZpC2Ib3PL9xlbr+BbJ/o2Eh8o6TlUfyPylGxQtobz+t3fwZfV6IWrKmq9lCeobbjXQoQqzm5MwLnvWBCR57IOpLXqq1K8pSIolfN2F8QNQuwjezad67ar6VQ8ysdxKGUA0q61VVjGgWs1SnXGZVT/9wEApYWzkOFQSzOoeMHc2+5Q9RvF2G56cTFEPekBF4h55RxKWN6E9f7Xr/0E0TlX0d/2dLo/yjRn0HwZzWDT72r+rNZdnefVY3N8fryMccCAyxy0kXFnCR0sWWz4GIabFcPWy39zu0KFY4bptnKPqKEA9hTrIcAJhRHuMzFZ5iehtlNNVwAxQexP7/YMZ4hqOEqJzH6r+kRQLOfepTp4RlBHsF8HfOS2wA04IVA8IQkc9s/dMUiPN2vCX7D5/cL+pRK4PS8M0OrlpB9Jkc3AAla5+x1FmAzx8WWGWZXTNCjfhD6XYlAM1HdeaDEYN8sKJpsjMydPmR4I+idA1BplSANYGkdZYJGVL1u8vdwZZPUTc2YaFn06VhBZry7HmUBUVAQ4kFyqnR5rx2lqEwmvoZnzAoV5cz2icwTTFPIvZawiEjcBdllHItXACXG2xeq4hNOwoYinxA0STCLHg11eSC+yafxNjJnqeSoZllAh61ccwOrigKrIZU3eeFvSO063Sc1bpbgzrGzZFPMA4ucJLSsE2JrMVd6ZGmXEVgu2YCW7qqVqvn5TCYXkeG+TrOUYapzDniikYBbuHwnFy6JC5WZ4sOj8JhbyChsW2A37fOgev8IRR8WyG5MereZs0S6VEVDTF8T8UyQJi2RSTibz/j1yuU+h0enGhuZXLCAiD3NXaSf3ti5hOvl1gUxBshm1VczMUEbZo2LPIzIqkhjrSz3oeAjuDJicZ2zQKMujb5MyMtk6nQTDVmyvVMGPzgbaxssovsnPhT4a2/UOTS';const _IH='b18572f623a3bfe4a06ffdc984bacf1d885f8cc9ae0e9f604192326e900656ab';let _src;

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
