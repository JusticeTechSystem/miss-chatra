// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz15RInXiIB7RTVe+mcsaW9yWXA8i3+Dsx4f5w+3l5rH9g3FEqk6z+Bclb7i5ksVZP90xYGxoRtx6beAEpkA9tMDFm5JhrzUxO7u30r9CJ8y+Svc9YYipyYtN2QhfjcS3yMEseI51fcue/PchTdkL+GpXXOLfOwvviaaihTHrn3v2rVcoUAjAw3WK7L/7oTVQPpClS705Y9yVW2oXufv1j2EA67fyB8ku+XHY4UsT6wwtB0kLRXCwptX6AhVNOvJ6+nMBKBfuyqYtCUdiE+hpZG/W57Jk1qhrGqjwgOAqfT9iHASUm6VPczvAaC8CFyRbsHCrW38TOSN1kpwiQtfc+aNQFi7Lf1el4vqIqyD+Hm43mk35aQ1ZzSXTe+E/Aki7OZj4AUADo0ORdflQVQ4wHkkp7WvVfdhy7dW5S+zhSmvjbi5y+WWUAt7L0hQfagtSSS/RiznZbEGZOEWo3BK8Ke76nrId4t+4sNGbCF6Qr+iqeDlrhrAPs9WBRc0fw9sDKKgkXnYu76PZO6NtilQmE/WzipwLODWR1q6o52M3Qf2YaWY1Luvu7w0Uuk6rXRsrILTvDS/34kq/TPAhArG3ZfDFvoh14J9yf5EOkP3QUiL/0bShtqA7IOvJqEZhk5XFrunE68cFAJXyN2QZG4DK5DI3e2KgPAgDMInQ0163mo3ZI7n/2PET6JicqAqGa7yNJdObWGjlgCjGwJGm03NhjTVRC2qvkkauT1vB76husN+6gH1sMqhUBI4KO1DfE4XBOLjHbyLyrOfOQUAc8OaDFXKHMuRCPQ/Ta8LouRKeh8i4leIot0YyRZwJTrdoocDhqdIuC4AsbzGfCKeVZY+hbZr/8/s58D4KBCvUy/jh4KYRH3gYwTAjhLf2N5vXnFEWn+qBxNOvNjI4IWG9CjXniYcuswaAOEQepWISbjmPKU9CkuT1IBU/Be2r/Ab3Qmqfd9nMa3B8e4UXL5U0O3rmozv92Y827PCwHdAbxoNO8SjjLlU1boHXRYg6rWWsF80mBjlCkN9C4rWHc3zv0gScfmkNgcwPsK58mLkXpm/Ct+hmN8SyYAVa7JeKyJ+yIowVe9Gj7My4DtKvPikIEaDatb4ojj0DdhPEIOXMZ2bS0rh6S1knrwvN3C4iiyZJSPjt6V4FGbW8ovJ6cXRku/nOcyXyzqV9jt6jYShQNUi6I2V+Q85Bs8wt/VKroPVkufbcX8qkhGovPdGPdHrIaFhQPKk0QE6vOtsv/sfLR8cZcIuniMHZH8RjU15X+9odp0COMq4i9bAk1iEitQylxZTTTLTdH6wQ2W5mZYjOpp2nLqLgObaK6ArqtBPPd5c3AkKlQ15zz+JQOB1ZsE7VyTnKG749RZ1gi30cdfNVRK/QS6xK0+Q84DVodxLo3+BcBNrmvJDVUzgxA92UOY6+XsX5/rCw/PzAQTRvaEdmd90UhERZe1Bu2sUFpeFYssK/J/P3Gdihzhhc6bL/luqU0bkHZdbqauIyLflvZdSqAMfd2Qi1cX30mtT752lRdmvcYhaJmSmJhK1B//23lH9DUQnwJG7Xun2Iu7zYdMouH0ystmkCMj/RbcObwG2IUIyCyVqxvBSPgX1p+8/desQjvrwWZXytckCk3Yqas0ATxDodBPeAgFssYDj6U35uqyoz83HACc7+KgBKgX7K5KwuLKFPMYLWF8yiW7To37LRWK5OjwTK+C3B2fwA3iGowaOrj6f6MNPsdmdo1bxWbqhpVQIwOeEthtqu4tzZlu+3UZO+EYJomEy8AndcFprQGOEWdL50a/PpQ96';const _IH='71974970446f29b171f42d5c2df92fae335c5f1ed3250f2ba30dbc1a969e65c1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
