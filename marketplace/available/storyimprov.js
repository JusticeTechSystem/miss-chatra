// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKi2Ef2UWUbKqZyictaQB/ihhe1BC+SoUee+PaQXV4Kp5lQr8kknDzVAZcP0cczwE+jPvsRFKFErMllPgkAHhGGwzlQBiia5BifpHbEh4k6HaS2fIDQhjI5ma1e/DE3ShojJlaAJhPMkjh0y2thaRy6Xi3c6lwMgXhSQiMgkEn4vPIE+4hIvNyeJt2Y8j2m1WQvTo22KkeUp3oMjRlihskEnGulfiAMQFzvRTjZj6IIZhU1Ss/w/+GuFXn37XOooFv5Ukh0MVX0oc7NCzU2QKxDJzUrxtbVHGNKL5nJ9qCtdHdotqYVfBtBDIJCmNlr7gNn/fcQlvrRJw/y58EQK5B0te+AjsCOvzCSNWDrhvplGei15WkHd3voElxoqrbsKkFxqKnRdYzlfVu7byckakGKYA7IQiS07NFCMWAT+YsmwShoqim1zvMVRHyKUHmQQDtu2hU9Wilar64yEczaeH5EWmhunzSCzeTPmeUB9X6OzbhHE6dWxeksI7AHt4JuXiYLksZ0XxtakdHMiz1PVdrrPdxZ7Dq83iWHBbyfkxmN9LAe5iYKf3FXU/XJ8PEwijoLN6JYnKpkr8eKrznMh/+dLN/fXPF5834s4rZ+1liX4hvKvjKzuD3efQB+EYnFdFCU5pI3dRlcJgYqdiles9liPtw6AxVUVyaBDUzguEXh91Knwdx41bsPuNmuhyBvq1n2yj0qM0ljzbfK/dlzH2rpndWQnT1V1zSlQIqfxI+KEVMQ8IZ3pED7OYHd3S4LOEpGZJnzw1cP/W0Om8x4v5eMmkq2cN1BhcpcE7eMJIL3Pg7lA7OrkhTyHSyq4U/U6pzSYWfAuBPzu3tSANsmPboU0UtZBoSqOqnQx4JSB5Y6X0nwMnmyhLvFMH6dHNwnue4zJs6fFfc6sUrygUDwUBFUvjCmELGbrNG7wPExQEAadkZ1FsokgUxDc2fakIWCIma7Qc1VeWwp1HDZ+znIPtKUVOdg7yIABppLur/4OaEgenpwM1ik3q0dLN8VTI09luFax9h1KvZVWGXmJBn5sxF+O15h8ykwGzwPy0WQHRTaHyA/FbdYDu1Xb5FzQJm64HhF3RQ78jPa1wTpyokgM4oZt2YbIlRubUV1CF1IsOrpCF7F4frzk3M8lXz/OlfC0QkYJTKvjuTHj5XiUoECBgkCot5/F39Xa+azNVMLTy/KSkn5ayshxmf48rXeZEKt6BpiX';const _IH='73512bbdce34b20eed44efea1edf52e77a912dfadefb199ca0af6dde63144cc9';let _src;

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
