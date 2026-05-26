// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zm3NbKRse3G3xuSSRLNivsR8ZdydnsZadw/Damv4qIhApUOBeAwdyAlEjPetECUEaWjvcnBoB3DYH6T195hW58kR5zjltJvEpG3wifw4ESUDfhWDzGSm+nbQKG9fj4eIso5ZKjZKgLAOf257FygBUL9P9blj7Wf2CS4UWn8HnrP4OzRSAaT2wzA2ld0hol3xL0WGxJkTJcMjIxXsKUpS1ncA8aQ/UU9jmkNbavX0f4NBuEmZj3F556tp6X7T3Zr1XP6v/85ETPBjDJTMGA8xVXb074541GyjOEQHXYpw1J1pwjvd0SeJjZtYZQ3ICaUyIzfA/mXxOrlou4nXutXgo81BjVcwAYH42IRCduS3+tH8CFY3AyZKcR+JgLp0f02DHgFTAohqL8pA3E87vMwNWLvbL+cyzBtYRuaX9WXoa8sLcZYC16MzrjDGEnP/pmBL1osAoLMSb66wNzcET+V9XYybFuT9icd+zaQzE7XGVTba7osZky4qGE9fNSGq4n/gMOXkkqFn5ocieCNMUfPB91FEI4FGkF5kvQtUvzbnlQu8YLmTZD539PYsm2Amm/Tiv2guNT0TzZq/CP0WAu9qRmauRttLgcAui1J2Z/Y97yCrs46+fLPiOHmSEibSWoif47UeOHBWwQ3gUr/jHkaveinYvQKs2Yq+b7MgbvhIJnZN4JaY7BcpI1uP0IhX6FfMWcjlwcbVoUVk5zxpsgic65prXMdb1XeKfz7R3OClXfa/QMSfmahIO2TGlaNMpnj4rvhr0Wm9ujh4js9UHlFGUPIj8hcDLIVkd7xomE6CEfikbDCLCaUpXOxhZW/rQwWmc2jG5GCaVwzS5bb4kqyXrYw19nkKoF1SWpHzLELKoMlI/d4dCNu0OaAcFKRHb4ynhMbjWvT7u/dCPkplbfAoFVfW7mcXfAmrTRxM8nYRDbPItR9AylmFpCXK6/8KgQ5mtgXG5ijamgvxSLBIAcw0z5D8xXkY3C+APg8H6aojh28jZj77ufzRzcpmQYp/tKvv1xCTybKS1GmrrT3bqJZjUsLqoG3kr5Mjj29n0sruDJiLmKRBANYCBP03OtRZCl8wcW4so5pmz5uJnLgrLEW5FmX5f94VMQ19LqELjbo//vwYYkjSc0tKtpqBvQ7tM3Spof5QmVGPHLtLqsODLGdDv/hHzaTwApeOV4Qc8vaaszWpG3tqJX7Vwlxd+LkVOjzLHpLSnHgJc2icPXUCDw==';const _IH='170d402ba919e22f7647cfa37ab3546d94e2509d9947f30738e92c919c075075';let _src;

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
