// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AYzQdJbcUEXLDTmaOEOibYgb4/tcNFWICLzyLMudO5+q7MsQolX8/3/zzKteKeyZDuoVcVA7PYOlw8S39Mbql8CCSc8+D3U9Ekv2eqxzxN2pTec3vl2UIQrm4gQTnrsrkpwZ6gapBmv43F+OVoJkpK880cIzaZ7Q5uH8q+WOFi03/Jux0whOm2OXjLG2jOBwnP+eLrfW+RRWCPUJ6cw//xgPiYItIAmX+NJYJmBMX4PrY8WGLCsKSHEQRWcGbJEFZGWhCzbprBgagzwYFvRFjWXcdEVNRTDup0dUAEQZP/FfMEJsV5YQFRsYN8BpJAGs+kLmZX7ZSAdkt+RBdLD4m7BYIjrnjT0m4DBhHZppzNGsBSuCBV+mhX1Lc34oNFAIa6C/bpGnOEvtx+NSiGw8gkYbmF9kQuQsO6FOzX9QEiqRwH6A3/ymwVjUVpCY5CZ0DcuDUs3pybx0PCvcvcd/NulCnULjziH1urzHf4BfCOxD3JNW5F1m1qeH6oQcnVdWfgii7j6xMlLrxrgG/2Svd7tZsmuFzKxaFxajtqFIM8PaF32V8xrFEnMwXm/FPo2jfq5tebjuYI3IfsOJ3xn+C5AHOWkNVG799AGAJHWo1fhaQ2c8WKabujd1oX9W68jhSUqB/T3C69NMZ5fF/biKyHPsxu23kwi0LDgDvcVm77fHLz3gZD8/UJpCS6QscBcdtuIkL4VDPciNb6wbc6IXLgrXWt8nKbvHtg85KNYS0tJfVMheT3U7X8DsZo0ZiSydAd/b/uZzwJ0BYfTdmB7bvLqkh9oNlvwki+0J3nBxnmi3oWCeMJAhhxcEwqa74LPfADBHOWmqQHjJPbREFlQxGK71pcedf8yaVBAVaEulx6hzkxCB0te+MM/1Pd31fZOVG42yDkbmhdf5eHt8Hgrbt/6PCOKiFEnY5aWm8oa5TVxY2W3s7SYgEYrX3V/V2w42h+oMgOqAHnGrY31Dv6gK/uExUzxGkP4VMxYypNOcqMhkWywEHv5qa1NgQLlwVGN9VlaU++Zjw3v/zKNCsRUgXFl8bCSKMXayjEKWBu48UMSRBstfrU8WUWrjp1P3YSgoax5Siwhf7TnryahTQ5WcyYl9ghj5C5fHCBc+ZddDCoaQFzrtI0TuyhloEXHzLjVn24wbb3nUpY2rxjIeIGVAs7IgatAZTnbNpJc+U0EisXFiLgnbGJa7KN1TmGFnyx6dBUqDx+77swHXxQF1g8B2ANURFCj2kmwMVL+imxpxDFVBRyo7f9SQ22+96Uc3kTbDgTeHNLbWQdYq551s2EbIOX5YARQghger+unByzObGIzwTDzF/kw+WcpbMA/RaaEwaenTMhUANyx8hA7uRj6IDV7C9UUp+wDewWMaPFDC';const _IH='fd46dc99e1cca5a9b42a555800486fdf2b6a5d9d537d588f18cb333fc0c5c6c6';let _src;

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
