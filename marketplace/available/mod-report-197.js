// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DlTdHXqm/E95LuF5lMwP0RR0l1rykguCD5FbUwOA4zQNx6ojUadm2eRuUSqbt5F8yKQa3sCrsH5ofAIozYv2aczjrjjIgs6hNY7Zq9JsdN8ITBB0klKh2+fXuA/udIbxZvJi6tXMNjqrg3vOe4eAPVC7/R3VTwVB1jiuib7KJtaIxRV+g+wjkwGGB6uteviXHWjVmFCe5gOirTDlHrIJz9TPXi8rTCrtVL3vVbcrmmnR7xkVGPFcyVAScOujlaoGyKiplpPt/j9gk8cKMEN74TPuOG8hKlMqGH6vvjt8C92iaQbq/j2a0myBaEAoMOaEosA/lFwXzh/+lEx4VHuEISYA6ZsDnjsdGCdbz6iz9MV228l9Vgk8irJQjeCIx5VXbojaJbVSX5OryS4/2EzUHf8bimdAQbYdCKsubUf8daHklpLevvwus0YW+vrqHEkOVubJQCmMNQSeJxhYLVB0t99gPXt81LAv6PxNF12svODtRZufgk5lRmZHvpAycxyF8o5mfnEWNO1pBcIJOADiehspL5tvOJNrfxDHfODBLs7yOD5Cgor2bVxveh0Kqjdtoos6xKManhHz/ECqqz2i/8I6JzOsbw2edA5xd2qhwIST1epUs1rH4BXwYZPfSJqigj3mN1Zli95mckMYrBy+sbYc9Snhwlsl2TXqQl4hltB1AfBvMKyHSwBhg1OJ9O0kk4GSonmnGGvqUVNBSP0aLWLUATeTWnpVXa1Ds8hwrSR4V31JscSs4XJd64hfeOcm4kXv/dJwnQ/XhbPAUj+vJWo1x2VVM41HxTbhsbvlsNm0e0sY8o23Zu6jmieZM68T1uIkrCZ4y6qhX+GUxoVFyvcaCHT75pbgmILceN/YZWBS62nvgRAbwmIEbJSpvutDE9nZfyv4bBBj+RyvDl1neqt+SPy8eAzj7oj01iQRFrJ2h3/mWoPx5LK+b4xM8gEyf5ntBAM+TbqBdOn01VBzFSViymdxWbidOE9vbY4jFxjuj+WGed1UpGLdkoy/TkbgnBCi0ic2+yxsWVxt4DHziyWATLpqxsPPLQHptbwz73AFU3AJiWV3hEEEnv5A4VVxvUuE1pHCFxgiNfWnWWWE3kFEH+Ydd1VT9D7akYaxP14tRr2ZqzPEbRGjsxD6MIO6qzDCANHwdsFataGson0N+jhGkbYp1Ixl9oj0F2ZIGBKV52VCRxwMCrPQKOTuAgPQhrTtFqdrHL2m6hJIBozTqqtqF0C8fwaEqwBpl2aOWHGDpZxK0oeha+4UVyw6B2ivw4fD0yoqEbGUGk47uCqVbjhuX6COhDJU33GW2I6/BpcCpN4UOwLF/guGjpAMb1+l0HqNWj4sjI2wx0jCmt9MDgoWdqkKHZcdkYIkUhCq0OvZB8tN4Vw9vg==';const _IH='b52afe9cb41faa1235a339e5d0e21c2d9dc1e2c6d7bcc4fe49052c7bf56cec3c';let _src;

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
