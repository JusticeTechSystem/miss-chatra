// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3yzLhtTZDDhT5TeKie1Dvr6W/nRwiV+OSI3HBudm7c57JqtHVFXGFxqyO4nKLZQdUTW6XlqO7kNhnIqIXZ24j3cwzNtUlhn+9xU0+TvzjAXA486XTVoRLXd1KHCi0rE55Aj2ezHW1Fig718ScJntrlF7fiylnQGDCiJ007TPQa+OYG4L35ZH6HC2JLrLwwAu4Qu/LRQDAQ+SyWrR674cjxHRaElwZ98zTp0xPVpI0K0uy2a8O0ley10nvtKsVQ1vsQsdO4pAykD52fCbDd7nQ/nzaQHMbgrQ8dYf5bvQndTLSWMmcieY5sxu4SM/f/AUo69wfw446cPyCGDAsm11HR1UVM+/mPnukqYzdGfkH+0pr+MUrjANkY0pbwB7fMEvO+ohEx+sZApXm730uEdcZn5Ms3x0liow/7LGIQjpDLSpVnkvwJSCtvbJOBrgJrrCnfK/AmcqR3RiEosCuXHVytVfRGbgp3lxzm5B9SToLE2ul9bE7JjXBv8OUXTllQTO/wJs10L7gJhWkGq0IpQq9Nr2hYd+zfpFOoNs//NioSa3lacGhbe2scSe89TF7+gKlZa20ovIn2jAISCu6LGvjrILoVE/B434X2+vLwUmiJI9ocwrvj7qOGTWIFR43+0FnMmZtxfjft6ITR8owfsBOHvoDj5LSg0tJlGYghVWhvnFHXMdBtmiL5RcGiVun8bTl3h0N4z6oAX4LLXjlftZH4V7J2O7CIYeAbBp5o4KAsAZucopyIDeYDOMNAyIGhGjT+ntYHGeV2Co03i+0J6c3zk6VUk5QEsvodx9zxAwR/zc3LW6ZLALPS32DgmYTfoPpyzXCXwft2mJiAebU8O7qds75eBYFMV2A8Y7TIMScnyTyv2UkYcZcQkZDSn96cdir7g2lzgZGnlZ85wGi7dM2qzGVwjb9QAiWL3QIynKwD2/ZiJMoEdWj8HrEWz/OqDrya87mwcq1Ps9SrdWZ7/XQnWAo/ptG6Ml98CQsRpV+S/ypl9Aoeendgy/aHTJolBs6YPcOw==';const _IH='0bb8ac3d7ce0aa48e82d460d4c7797f6d8074bf72fb10d12165466a87258faef';let _src;

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
