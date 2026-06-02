// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i38qvMG+/9cdI1qHf8RJIIA2bZ/5jAI4ygLkTb9jqZ8CxO8S46TAaRiVHIk54jkARg/CAog7PLyL2SOKWXrrvY8/JjY5DtctUsJdOCWkYQCEcr3geUijiX4KYd7vOE5X05b13fYPzjcgCoj9FOwjs3+W0lQnxFCVyFKRSf4mL0Q0++C2icPEb2I8gHZ8/JqQi0hyDr6FLtc+s0kyO+ldLDrpjAi5dwv8QxQb8nG6P5r5BbKuHksvjBg84xuz47qKYoD5M4mWkxK0VrJBkeWF9L8M921ZTxHG3wFnGoF4is7YEoc0DuzVrRSdk57ELfiffGQkkqDvN1wVRy6AlY3KfKbzRDNW0iBk8J6tU5Bq7cPklSnxN0FQ+iE+uZNFObrZS0dEqGNfxnEhEhTov9w452LtcixqbF75lxE38Ue3tlgRzRT+vdgZ0hb31eBVg4bjhUpdI/Su4zY9g338gGJo8OG3JVBm8PNiGw3OVU5Psk81+O8rlUvJUNrp3wfQXju/xDgj2BDpUiLz1ClAjRRere/Bq/mG2pOdLxBfGxXM33vbkgCiKFejE2Fky7NeSFjhxKsxi0vx3y4KaW8nRABss12Zd2KqmohSD9LF+WkrsrNcM52oGQsi5cpfZldEaTAcGTPwuo0NXgAphoLt79PjBmONjTllso8AN5lMp2tNoOh9SvgTvceRGknhWFBmsHH7LC+epR5xmIYD2l4S4MYJsoIbMvBRxumm9gwDS8q8aVwJz7uWqboAxjxXpFpq7lDoIBIs8twFBMMN11oCEiHJ7N2P0/db9m268HuneJN3HyySxM35KP8WOoC8cyXi4u0pwBBRNmrV6zZjHrpVBivMPMEDvKQd/13r74M4CyLM2UkmV2gbKTKWP/7kXJbfxGb0+UD4FOIUQRtiV6oHV6K94rrYm41brZMF9c1UFYvzSwEhZzhkfpf38mmKAPzibXxquVrlMA/1GYCQtrFV6sutpUaAp8h9EbdsjOwX5n9hf0JTjHJBDPXY2ThHyE5Oadt+8pi/4QjKTBaQYKZCwYpP1LkT5LLMGaskNqZjD/e+sl/ZHzYOOo2eaD+PCPcW3ayvVAX0Yu+jzZR+1YKdGcav6Z8KDy4ZhfspiT9Z+zWeHXpdC9BFfSh/XTzPzhVssk/dPIDDwD2at57bknBMNxUxT3JJZeODCEXb9AvdBuwfXVVNgr9SSkPBzGnmUOEQvX+oYqPG7uOaYTcEU5ej6VTOBFrVfv0nePLQpeuah25roE+PbBba0D03AE/gkRlOP+mvR/nnrUi2+4sCqFgmEy48O6Ay+Kc9zkcI4nXHWgbfSR8oeZiEqc+8kiHVY3GGnoZib1tVtfXOZH6PR/WfZhEkqBKrZAY=';const _IH='7d77e486f49a7eaeef4eeb31a60b739476ff166a580ccd151ec62cfe50993750';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
