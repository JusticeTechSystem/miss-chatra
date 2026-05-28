// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HLeQPcOB3wi0XhiRs8trZNsXTq2tALWS6r+TzSRxPOx+ZdBmbntSyQQ9yyp3Omnis60s+6PNm1svIRX0VvciTPC2/+H5AtkAOx85sO1N0hybUIhhFLyktrG9Oqe4Mouxi/ucwkDtHNpZS7nlAX9KPhK0N96OEP7Zi+gvVVbum8RsnKxpewh+GlICxDXHMq17h4W65xGGFcjut+CRbOfhILe445SKBmnkisykAfF55Cnk+uU/Hs6SsEo3SDBlMC4/8c/fzxLA0zdW4Hx8Aeg272S2aYz96PpyAlhZW6bDlkPYm69C6K6fRpKVoyFOtlnkINC/KDcuwL9gHychghpM4NAS3Zm0P9RHEVUs7wAvcVj+RQ98e8mBSg+T/BGXmhgUNiUPfWFYcJpLqEPkPnZaUISj70NGqkorlOHkcdMFO3tPMhvsqjg+KVXLXzIWwkAeVdHQxE2+kxh5qt/KCAOo42JSb/vBTRhRKdUCuBCyn15Lho85mSRd8JaqBqqRQjoiUZJDJh24MuWAij1zFuvNKcmSh41snKJ/d6O4HnzPY87QjJDgVnBPa+JAdfH9szAX/eGbkLCUfqUMq4E/ZIdwEMoRDWz7QtNpgi84auRIxm77Ls/aHp07PDTK9xxdv9pGkRJpzdN1nzgmOZtEO5AX8bYEKgJijP2NyNMFkEU9r9i4r8SkaLVAIf6ZRX4tBuvEXK/TG93rUu/6tjrBpvlVXaVfZnz6+IudQac9DYC1SGcqNNqt9X58VAQbqwfYaFN7lOtrSihReoy/Mkowt1KPtD2988oVWkExIj7CZMamHGmPrbABi2mRrujD+hK/TFhiwQooxkr5EdAcyu9CSdZZKGRB47l0Z++Ku/17JcS8FyVeBtHdmuepc1+5DREfVDAxwsmjyTrikIv5TuEuDLmgHmPif96N/WQ34G4mKNKuF1pRsEFy+saOAjXzW1qOjthPZldoDg2oM6OWJ0wVguZKbprze0B6SwTOuq/Xfd/QVhtDdFWUB4+h1iYNTeaEaxkWlANh0h2leXxmIiTiYR/gyifgv/f+Ed2yk+9cNU/aWXuHLegpB0js1bMAMg2zLsTl+td3KXZi/ma4cwA9CBiZjLdmgXr7ndzERKEJAcOAYWSNRPEC9zrLbT3O/d9Yi2RCdbIT1gGqZJKJ7pdOE5Rg4V/zYPt8RYL58eP6/oVOQam3A7r+f4J3h78xmg+ogFYFsdzUSo1clDkRXjkbV2xlSG1PBBxzk9JTyi2GKQ8ZgRozvVgDKmmYY0J5F8DLvxg9ynLYnaL2ZSmDEIbOi2TIknFL/VnGa8WQtgcsKSsQGe5eKwg1UoX6y2sO8/uFBWs9dHVFQ0nf24Tb5tQT91Mp1p6iuQgLKJFqnPvJaYPPaqDtEkqhMQ9lg5WmpoGpv9haDP+Ylin7CeMd+ESrubiwB1x2JBvofQh2LBHQFLB49/GDES5c+son0WboNOZctXz4HR6MNd1Bf0jjTYvZ5Pu25As3hd9ZFDwlL7XxgcmGb4+2EwCEwiQwROTu7avu5fvT5yDuJQvXSNcGlR+cIUvKVib477PE4pQAStVENfmjohFc8I6DUrHxZSA2W6ALsAulNV/P5kA8dVJZDrV4Ms4rgx/kwbJ+SLtUjlKFPUpBBE8fElCwd561ph6MuW/Ub7PjLgmfGfRQpxcmgJzebtRHeIuHo+dCAXsQc3XeYkmtLpzpKr0c3r43+rIwdY8EVLIUyLgkez7aRWv//fizg/f8CzUZ8ADKDaeVPpgCA5+pjzF3f+mVeSXglvCh61Lg2Fquob0jRNeU6hVo5AnmE3gfvcdDq4YvmZ2QdiscMA13hUleEae8sBD8TVzzUfLMIAQ=';const _IH='54c9defa7831907101031cfdb3bf0931c14ea0541e77bef2d844a63dcbf7e635';let _src;

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
