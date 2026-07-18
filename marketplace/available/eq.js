// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMlkIT/5Oq1vFNnZfnMY6l8WDG1QPJcK0qGsc2crJQJ9La19jnQMgDiGQH/WU4mN2QqAYmvsgzbJ0FmLbBBnMZa3dIJJID5kIshZHwcMWldmU4ijFtijDqUYWCROVDge3glwCyXI1NuIkRhzN/Wd3jOG6NHB765jKFdkuvy0rl3Ago7UvpSfPSNCmZ7sr0pGg3NrC35/UrYUU/HHlQur44Af9agwIjAgnS3itmJcK9amaaXx3JuI+FGmBJBHRNHP3QVQ5UPgC7IdXAon/qjmX32yT5RvNHmQ2B3dW16ijY4gaxJicLaoFfto7HW3FuuHOGnpRRE3aaL8QVQj7BlSz1bMHRVJPCe6G29GE4RHUGt6Ja/3gbYF3U1KAyAupM9HXS4nbEKdYlTEGM8PA/+ye9Uhx0hTm0dB6L2naT2r+GF8AYq8tnraNM9o3Ps5k/uA52HjCRYdJTZA16pSUD95fOJvQH8MDDtcQL3+W7C8cc5L43DuK4gMyWqvDXC6g6D4fzxkhcodIdwloiGPTLMl2XaeM4awiNZa3iPo3lDzmV0Sq86jt2CDyLELu+5xd0Zy6CYCBIW6bbOfyNbUTw+gAArhewTkvQLUjFEQSancGxwgAww8L7M5n1gSVahSBnWOrAs0fWR+dOOxMY4hAMo0kFhHDs5azsPoKEVR3F3SJC2TIgGlF8wgZUzafTB/jnDM7sB4g5jV6k0rghsJ36lDpnalSfhEe1ubS2QMpGbACJHhK1vSDYWppF19Y5cU4AaCt9KIXixjErHBqpwu6sfo117e88WXEr6CSFToDoJIScyFAfSxOJdY03gm0gb4a7QobeYcZ2PswfkHHhcqc9IWb/iQXhsmih+eLF1HFgepnSA7/4mrVrMB8sGFZspBJHRhY8mmOjLlv8PnKfwvNvkyUfBB9coNK8I4DehxBgV+IsH3RhDakpBYm4szxdWciKlcbtawPkPaupADcyW1VoLnEEF0tTICwGEeH2SJsSo0GwHOuXiZHxcN0BbcnXNOx1gtpm78UL1EviIBlugTrY5OZXnX3tMs+rlvF5PXcnZKLIw8IN3MSUUXqxTaVsj6ZoAXChkDITAnRmcoV6qYDqkn0PVKnukyg8oSl41AuNsjQuE1pmtDXB4nk4WjcKJWOcNrTw8IGiHJnLaJFprwkxhJrRvAt92YbISFvgqxubDHLgPVk=';const _IH='76b850f0fff52f28ac0a5229fb7332e939a16d3f0d32a6a5275b1598ffbf6a71';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
