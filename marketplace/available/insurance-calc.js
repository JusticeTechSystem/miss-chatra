// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TuWea2uqDX1ETBr+SLewpnGHYI3ux6xe9v2Lazvt5rIGibHSdfpSageJz/U3sTITv6Lhg8sVbKr/n8sb0guqXjMMWbw9nSkWx0RearsZyzZZj/ZAwzKA2ydcz5VDMjHjahEYElBzT2lpp+LW5YRxCHCNRAHOgsAbApa77TgLEP9xyePe60QbM6S0ahwM1CRep/KgKNhd5gMp7ZLMQ/q6/2/MOnFYs85ffk/rSrSx1dymuwBZ7HdS7PQTcs47R5tbydofNdiNeRJWMsDXdBazShhWbCkegOCMXBivcIQcuicgP6Ni73wCMDz3VHe1sC0svLB/RlzGfqFEM6kNYliGQU5+rOkGxBGvGHerqxHXqYWUx5o74d9Uvhiw80zLaeGmHPiIu5hJi2CFbsdju8S/QSCYb8gD6FH8tsnsBXOf9FslZetymif1q47n4K8W239BLgdIJw0+TaNsS1bLDo8wp5KDlWc1fon1BAXjnKSW94a3Ul4YMPDQidiEJdp3JYIsHNju1klerbliS2msuRXjdgjCslgkzUpRCGxV1UQyf2E9ub5pF0Qv35RHFP8vOsnxPxcp0FE74ZdZM8DaaY6h1y/PaXI2WCk6r/EOyfG39ppKtjlvmu6gijjm5zgNgBDQZ1DTE42ZXpmexUrajlGM3UOqBlnFppjPf0NjFbjArKkkXj3WC0y2dzcxTe3KTNlFTCIVe3fGm5RbNYcn7mLX30UJGHyCfAewKTKLP95m5M33OwbEvmI4zJ8ZPd/ZnQAkautfPCCLp/KbyVYQY61vbAtN6c3zdG8uwU0lGBE7TnJff7BtVOjNg+lYC1DcJ7YKY1ogRbnOKk6uhOQ0mwB15a+vpv1bk75jHeIUbMOdmAs2SFo4YO7vju4kPBUN0UJUkrLTipTT5Ys+lzLk5Ndl/D6m1DrErLVRuEafIGIdPLoA+yVZIcxt/SIEgh+c5otoRbuF0UXB6s2JtfnIFBlh2kfpNhnSb4H/6ftlLsKFLXgbA6U1VVoQfBtQj05w7xt0kim+y/gfIzWYWeEzUmwtlM/I9P/ND9Ka1s4YSI+sqfAtcujEHCxmsQoqkSDs4vOE3Z/uyNf1rOI4ktmkW+8/+iRLbooclUmnFvoZpQ6a7lR9wzeuV07UN9SzndVYdpYJX6VANwD11VcN+XJrYhBfm9/Mt56iqsF029bpTde/A/ox00kbJqT8ojtR1EJ89mSuneS6si2hMUgwQ1u/Up6RWO4cB4OfYbUFJqa+P0xFa87+QvSZ/uYQYO7EvMCmZPfrmg0ANmYX3OWbzQxmfvAELMtpa6V5cDp/M4PI2VeuXfJpQXxPYi/GYckfNWQK09D4U6UDWJp09EuUxXizsQ3SJwLUPB6x7+gy7uKseTMcXB0rIuzewA+zXAcR/F42AeDelAY3ExQ7i/twZsJEq3t3nFhDEB6GHx3C8cz8q+R2TXTVRJkEOnlrDA==';const _IH='854e4a9b572a8b888309733ce923925430716b6d1a9e443c8df12fc64c18d45f';let _src;

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
