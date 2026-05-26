// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hYea/NnOeVWuYIB7MjBCQ2A6X0t5+8yRmr0qwvIVenKfcPruhFwkZXei3dCFQ6Y494JBhwXYJES183+JYfRf/bYbDL7NImk27WAourtDsp+TBoVnMTZjfZq9nlvEl6hBeILskIMuORqboOL7ebbTHsvyI7FEK8jtyZUZajIfHn6qC4GnIOfpm4SlG3w0jJr3Cn9ZjPiJ8gpANoI39/f4VhTgBfuthkqCZFEbfGxjIf4EmfhMOB1F3CA4HZjeaUNdsPYZ/ZFBVfnK4Alo+YmBM6ny0LdaiSdEL5nOXKrExrZCqTRpJQcq1Jl+mBZj7fWyI/TR99iRQPEZKnuWmS2iPFyTwlUzq/Rtb5VnWOPfZPEoyNSf9KkNkiDL/FonspUG8JoxmzE943G4Vluix98sRW4FygVc6+1LzmbfnIqbkAmWk2rncudrmxG7rrb5S2qheydiG6JaxR8GuTdrHL2nt5qoRWJi1rDwzwLxVU5jkrod81WmbkFwLgxGiX3w09fzrvImc0vs+NW0tXqnKgVbWyVp6RyD02bp4E9PV+Z4xmyOtLB7y0JorRFhcn00pzUGeuYn7DNWE0SqsvCJQ3NmMdFTX7YIo1wK5OdyxY5tVHj/oqIngJKtRBHoYqLCk6kEbiUGDxHsASuOtV4fbYl9sy0w9WFgZECsnCE1sTnHFsHQGdcrMxeBkraoFf5broG6THmSzDaHdwEpdak6kedm32lSFB4sdNLidiSldCG4uFGGAFx91ZOJoXWhNa5zJp+LNeGmatzke1BRn7ENgR0MNh15RCimy3NoHUY8c74B9nuHZQZBoYznZ4gef+nyKJiDSNDiBs6QTnk4oVy8UsjDRvErz5PoAS+5Ge8bwuUxRa/WJe6uqHJkaXnAKTtMeqhwh4EnWNuQCdYqvcCHqF5+1acpQMiNtzRdDOSUjpsG5oC3RsGXu7BbUUpKu4jZAPZ9XxXsZtcrB5de1xv4OxKvCVb6KG3ta2DfQxceV8hVWL2uRG8k3xMTHbdExtY/LGTbsyN3hYHQuVEocrUbc4yp9KIXr6VLHBI20vdWydbWf5DpLDYy79oSjToJj0IEADIOM4ezBw7T43NWChvhQbvT4u/h2rN6cY+x7tmS/qR2Iaxkj/GRDDsGvoBR/Y7QDshqcwqfc8j2vz5mxsbEc7bagNyX4LESXeNCz2idIqMt7x6ENcJh4zz+Ow2FMLJrLBXenazxzpLNFq82BvqdOp0t9VliQcTW56njd2rKXra6kLiJy7PSLiLdGgxbF381GnAES4YyPBXVAlF+MDTYEL9eCScgaz4rraaNnuK9Hx9RmHSGgMUDp0xDyx0X2H4yHyffxiuBwiSwG+etjgPr5/LoMW2dBFcpTgilbuZLTRUjH6JxYbAFwMgB1FPpHL+gvo1YzYuNn7wbqp5eeBM2D2hRNB7oKNjEuLukCjYihoi0kVADDoNBWbmW9o7GRIe+0iGrZTsAdqmooUTqOKuH3hieqv8m5WvAlQUIlU+YFd5CbmFjf/ajs7cRj6LO0J/OO7kEmsN8F3BFPtPu9s7sWWdlXrCCAMrSk7KuwbudbT1TseoWAZstzqeznrI7e9bolEqZ+DYdiy3GBr4GgwHXv500kWv48Th6RCx4FxaWDDDgXiPpj20Xs6v7qhPh0HyMa/o3gPJDAdlg93gxBIpca7oQcm70Selez3oFdkRTx6PLqPCon441m0I86xnHjg7khXXngSl4AXjwEQV+ecNuGwOBdWPEr9HjTVaaiSfzHU7JWjJL6T1VQhIGs5PFseornOuuGnl8SV9VhYnvsIh56+5kPIPVuzlRKewWfOxZEfGIdbPYEhayB/I=';const _IH='c20d45352d7c99e7202061cd8753b0c93a08979108751fad9792c9d898941970';let _src;

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
