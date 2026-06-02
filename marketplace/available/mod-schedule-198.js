// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2MUWH3MUI8qt3Fd2PBLt+aJHX9GhHo7LO0Th3LmtQ22f+6uxt4q7bipSqr3V9AF3jq2u5aO/G8idYLUPbYuyfw4r0d584BDFaAWab/m12tGUasIswGGnO2tUmCHAB5yQKhsMX75TBNyyub11Thxvr2VDKg9E6SK/Zw6lP/hyd42Rtb+bCQUUwJjrA/x0F9Qgfw+mhlRLW7BHWjHCdX5+Xurk9slWTK733ZJ6O8RRCNNksjvn8Bf/dFyBDW4Rc8e57A2HgOtcVCvVfApH5EF3kUc0WllUVwLRQABJkTzhcV4n6og+WSjh7bRHvuCYzJzPukZAe3Kc2Ts833lrVuN1FLwTOCkaXJvgrwc92wZPPNtaa5ae4/jMomYPaOxBonPVRYgLijyZ3JAvpIt1tKWtQPV7Z+zyIqaaz9x46ElOBmo5HFTMU3TduTbo8Sj2MyDOIoDQuansRflz1lSN/iVEC2awDIO4I+b6ZeKfKSDB7/xo15YINAr7JPXVW3EUnghC3VsmCjPqNP9N6+X2TQgqHXPkhtrPwRAGhYmsdl4cJI5+xoe+ynFjrlE734o2um3cAStuR/bkYyXczZ0qOeogMWDf3OsgxGKnL9XgPaaC+iHkqZ8dXw74mf8I3CLJSg2iWwD6HGeZu0SwPuCn7e3CbdHrZ+vV9C4fomSfnB3cEQtcM6xc4hg4NTDHYEItxFhHM60kNLaNLKiM38ltkRCtsMr+JmEA69hev5I7MAY14sVyZMu4jTRdwTWmgPK2e2rzadfhkbtVwO1YQdCn90nJRPf14q05jlf4Vj/cUUlTtgPMcyR+Se0VvWMy/YBfXpONU20uNILXOQkwjVa+u5Tb3/f8wEYeLm0eRnhwdmujvyCGDuLxSjuKf73Cbtm/8v4DMOVx1Lt5tTCN4hjWoBxNKTKi3zxFYX2l3gj4PhfwpyZa3ktm7p4qUxS1Vz/jOOIecHzZr48XfOi19Q9/Np5pwzBO5uUCn5VOLIitB3wNJHSVGEN/bFo962wn6SlhErrUiL2vcIW6jCfjkiyGN0SZLls9P7/J8q0Cd9C9n5eY3MpnP7CmNVTQNNSYKp6aUHKSgmiEDdESy6TBp0C0eXoxDzlxV5b1nuzeItNp1wZF++PQ1dcZBQwkGTb1dnHgZ5f22sy5NQxrdKKIcZOKM87LPwBOH1ZT5hMC3VCPI1KXnoUlP37hovZZXGJKFWyEUBfSX1mqxShIGYpZciEYlWhy7sORcjlvGNffGDT4ErF3/okBTNsXvbudriRqS2kuNLZwlrXyU/cqAXUWjA/+qvLWBQ4iJKeKDqZri/t8HCEYoWOtCocE1K9Fqc9WHm2Hsuh0UWgOrGuFXUmzRlmKzy5CneD8JIII9DzdMQE7L8sdGogzB3evQfnvPgG3BlZ2LSQneQ/QKWCetkpSR1Tu';const _IH='414ea39a370d888c8792ee6cdf3b3b0488cad33b871978a1872583553d484a6d';let _src;

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
