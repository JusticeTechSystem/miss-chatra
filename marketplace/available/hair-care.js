// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hbti2nxTt2lCF89+mimM8GmoByJF751wLEU1iuZHa7YMnBQGqwpb2HSuGGAvlyQ3XMFM2/50DnyJLXbb4RziUglpjoPttQqxFBqf7FAp5i7MLZGt/pdpa5cYLHc0yt/YHMWAjLE4ZGE6HpTA9ZSh8oBcO+XZ+M4z0tOa/AWL4NrpbEpjpKpiF1hopPn5RAYiVKl89m2O41Pnt63umPI/f6+QmnQQRqOU4KvgQQgKh1GCnmsR5oUnsIlG2PLIzWweskZJCRtWe83LfZbaLySpBGuPCObRI2aGt2cnPUdMal5PdubZiQ24uw+K+DbQYkGz58c3IAVRYwGwRw/rcHMEOKpDVfiDDa8NY9wBNeeh6FSB4fdPKWZfvCyFLH3ARyE6MDSMEC3uMDXQNcI4I2iskmgD7nHAFlYtG+GJpPRNgNaqsdLwr9rEk7wUMkxj76odaMcwpsPxc4uG4Kgcz2hZIXhw5aU+YtXXQTVYKxSRHU6vdQW4MxJFmmLD7wk1vL76Y6CYkVhbROocTigDierCKr8q6kHLmU/E5NYs4MqnoyQ3OYb4Dpf0U7+cfOCsigx/6OSZ+yRNPNWbdkaHUX1y0RQoZXzDkAwMxRjIteEONE4kodvUTlKh2JwG48kQogecYC1GdDn5P3nDS/LLcJ0H5QsheIPfSSspeh5QiIK0WIUuceRUSNyX/dnqjsfoBDZvPwBgQOI7wcQO8bcwKjmVVshMUoJSDubk9DXVpkEe6du6kmr8ZsOtjnm8I+EnLU8ddm2VLvjxAgCoY/GVdxrZA5b2WCGjsRmHMO7jGCI+DW9VTXZViRVvd4L1+NN7/WPxa9tFNVQ59zLKafGLuW9ZQSueIUii+S1rodTzYIplNjCLYP2yttvzYbqg/9tpvuglmBXM9SYTwgrJNuCXRA6yTo7/o36ikE3Bx5F0SL9tcSTW1QKbR8v8+1uoymbBcdhJcy/5hZTsVKaBL3M1C7TYVlROJwYGioR5Wb7HbYlvFENC68FZpem9hdaW7Wc0DVVh2Ay3ERAL6USYvzjsFn7L9zvpAGWE7vcZ+RM4znmkfurtN/VmxawY0rUQjpVHcjKASIjRmq4Wb2eJZrB8fEk3vBCLlc6y+nnlu4MV75JQv7XGy7e6HqMmTpeG4oZj9ac1pBz0r29vPPxZ1J/zTc4ToOxNaeJ8KUdlQYhKGt2INalUJQ/YXZg8C1FWm4lTaJehGTmAfmfznrnHMEMl2V8ZL5imE/Dsh9Zq9FAFLbMOPhAtq5O+mABnAZRfjx+nbUgiFVxDk6PBdnpizP6Solck4dU02U9VOm5x3PVM/MEvsMNvzbiPrvUFBHbVB8roz3nVJnSdFiOXblJIyQQuO9HMMF9DtJgQ5WzFrRRbqtg2c1w31cCJ7mU38FceohPG7b2Kr/eqTVmS36PS//8eKmCHBawVOhVavmj59WUEspnS7ATp9k83JkYSIkDCrdqGU1Uf9i93kCEb9u6F95Nzc9abu2R3qexIZZIO+9YJqmFx/S8a1LUhevDda+aQmv4XKe6xudnEi93FY33q0CCgnhlnAA2z155TcujRTYIt4VQHeXAGwbL85hLRqMPtu8oPNJtKzFno/fCi4fy7K1XRwVx4ZL/0g0Q3G77c4SjSZLavIlW3yWTNpi4FM9E1Guxu2fO5+YwtbatX+03Nfm7d3gtUWDHlRqb/j0/1K7TrOg==';const _IH='4a7ba01dcfd9330422fa48d97537a2e26d8cb0823e9cc65e7e26a66a83c491f1';let _src;

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
