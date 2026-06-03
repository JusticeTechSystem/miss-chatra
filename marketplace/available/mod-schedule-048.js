// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Ngi7jaY9yWA72yeEflXuD+mgodbCne1aKLDXX1qNjGF0nHjKHXk5aULPpUnAjCfcvmO/rM3zyQQ9pPf4NkpXUk0qz6D1QK9ChlPMR5gvQ8CIVtUui+5ytJdyBIkN/vFwirgL/08+UFQEIK0l9h2+qSEfefsF5YgRJzSqCoGyuQVYVIxOmoVMYNJhmRb13NyokZDG0ofLI/WpyZNziAHtVkk42hcFGeWEoWBH2SMhOUZgf9i6dI3/nPlT5/jAoES2FJmPEGl43DS08ontlPQiYFg85gJU9Ra2OSijkWNqgogmQ5TXkeWKqCV2Sk4kfFC9bBrET4htDUJZ5KuKEzy/aorGtu4lWa4MYIimvnRdAu/J2Ta0bjuXzhTrVO4oEbxXRNLOiUZ/MVuATKBFtCfbOTaNbylG1qDiqGK9P255EYPeOMh7mNkXDdGndVFqrowUK4HfGMBipe0tXgVAetXfrFjRIAtJK7RMrkDD+8tnWQJwbT5P+hlyLLF+Xqb8ugy++v+a4014ZUTEI2sew2yxknPikju0wmbqjPBQhuHQUkmMhQfkXoeLapQ62FnLkG4tCQNVnyL5Ijefbe3r2ItVn2P6c6pf9m/QO8xEQH1aFbMDP3mKD/MF1FtkRh20nY7B+gcBkxdt0XojXZ3il6e0tlQvXeS2f9ZSNBp9UWxi67Vd40cMEGuUROoePAJpW+uvtS8xg484M4/EPhA9FWOoGluSMcjzNb9PH4EOaVcyvq3+bEhtu4eSaxoV1dUlzLwg16ZGvyPNiULg5Fc7+DT9husya+Vxjrs3sVb6yWbfX1ypJFQpbUhFOcJEwsVCaNQj/p/9X3mRA08NK4Dd89HMboXIN5GZ6gU0Dy311J5It6jvvT++3OxEmsum2fmCGtbq8kJXCnfa9eMLLpUdrJPX+ws9avzqAnSsaJlKStsf/DdWfyR0vKY5FH8bKVgEiWM5HMEmiD651cayZ00pWPcp3SIs8psOuvliOTSeXDmYA8dmczrPAZMaqzm1L+3Z3WhBZSELyex0fH0kLbpM6V174RY3ymk96jd+sbTYZKk9bUWDrOCjg5mUJz4MjRdxgiiL+KcY67zKrWvfYc/XipF3XzDbTd7mlcDT5zQinANzOCqm5CQyayRkzZW76ZF812drAGpcI100/yNHrTmWW7Li+bjGZW+Z7DejFaXuuWdgwnXynlLfceQVO763ZjA7YtfmG6JVWbh3EM9eh5+WMuSmm16gRF59WY9sa5GlDHeEYIacODU+IKQmSiMdeSY6R+gnmT+xglOc3ckCY4U+uisH5z1DJV+WEr4nxYR/bZRr3OMQtzpcL7euoGdivz9e/V+s8E08R1EAN6qw56a+nku4WSWNweofsToYcimOaJqXeHSCozCrKTyCGs0kzrw5VIwRMHGaTRoaQ==';const _IH='412482a1384564d3dd97143d932dc60732261af8ee8216fc3f983b0e2b952865';let _src;

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
