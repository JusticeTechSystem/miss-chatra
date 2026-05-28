// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DkCY0BEGtvNWYTGn4oqRun+2Nx6IVtxvcUBpqE1f8cFUtDu/gYIWmV0t9v/5qn+KENRh0uDWow6vB+MgRnAZzzyC7I0tHjesgRd5zLmfiQYJxP1Ej9gt3JVIN+qm9fw/mwIM4RbQxcAiz/3tGAlRegXnu6iqyBUA09SPNkReoZCvbpeIJoNjmNesX1YYORLZigoddXS7HdXtLmml4FZMRbYda4tMiFB/rg8ma27Q/8TDeFMC718kyOwP7o7GmAa23IDTanp5XAetEUEtVMW3zVfQ9VMJ1+/a6aE7V3MwZhhn5l5gE8RGXxRPiZtoaqKZi9/r9+pwx/Rd1OzNME7SiolyfgoyYnab0Ignfb3mNC7X/5FsQhUde5DHPqwQNva7qyOuTFFqOTjFaogSGcf9U3o9L+EdbndGCNHDDbdwGC+xTEX9LdOMcG6cP6i9LLaNAKQ31lh7fqvPtSS6dNJdx30hKIdXWJzh8L2yfdviyd5fVX65Thvg4gelVCFBS2nRFxsrzLinEa90TwuEukaMh2DE2dSRfy+inIacUyU+gir52J3LpBZnS815V2QgI3bA+tl7RaeSQUC4dcXW7Oil1RJyHaFOlQ72BqMWqwXWF831IKFNcn5UaE2LwO13PIgqh4Tje8kdpJy3I+T/7hTqnT38EAbLbbQh6VLBAJ2kSKCpOkuHlCyxZHeUpIdfJeHzawrEZj/dDokgz1qzWDe+lk1L8rWcRj1E0kloRhPtk90nV9enqIU8NqWVrirZpdgfRgbUnmlGKRl5O2MymrsK8CxPtvXZiZWgykSL1YeWD0F0LIoHTm5SE6COYGQRoIvQMiv0tJLPpgrRtxXFTpz/SnD33F8ey7dD6jtYlbRDDn6IgOM7kdqcMjKOY/DB75V7eqSlCD4OdFy5uo6h05kNLSbqw6OXRZyBZkqzK8XlFHX2jijThGiRKGS1MJGr1v5HzP1rufwdyszkxcXsMA/2bDgsKwP7gELjRgN0J8Mjkpvns7yPUZ4fkkV5oW8JYRW2+557VQp0A0pmwNK0NOGRQb9DdraFjI5IbFKnzpYzA+SMxqpYvrC/pD4ETAsSFH5DwcxoNlNO0782G6zzvZODevieHVE18FxzRzXYE4f6Z3A0G20uXKRDJ5vIvlB5Z/ZSUgOSanBcs1QGSsDfqRVPDgyLGG3qmKe0gGsY9meA295+PMLItHI2LisxTJTR3rYLx7Q4PrNAcS2eshSEbgISJ4A8szqKSf38sJIQi35RDNr9Fg4HysAejN5rnKtZAfLbCPYTMgBjuLuyfEkAWnWqJ4t0WAM4x40Rm2jaQU7W7zc2JZOfp90UtHBuNO1MBz/mkZeWOz7jAYqS8MZsouGbweKyE78qs6z6PJ55PwMVzGRU8vhFzXEP8pwMmvuxD9X0DbH8DjTYlOsOc/YM';const _IH='566fd19bbe4e70d1c7595d27bd2e4238fef1dd42451fc5454b2ce05241d1cde6';let _src;

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
