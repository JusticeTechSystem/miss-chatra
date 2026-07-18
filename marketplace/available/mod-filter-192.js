// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSP+uX8JwA682xKXyJXBqU9obGOoKW9FkBfKj//xg/KIdZjEoPD65J7ZTCSAPmLpQNNaEIfwqp5bM8etgFh9/pl1YHix6w5ubxcdrtMkOgjI3EWTPEQL8F+minygsFSv0YSP+j5m25AnxfuL3/ptxdHAy0Vl26wKm7S/03D+qH1/vErjlQkbkXuIhLE2TbtBhzdb8Fj/uu6z68ZkGelsQRW3d3ILSJxzdywthnTMSSsGpeeCM+7MTh/mrQ0s+QdTx2TGWoqlZLJQye0tuX8Je+u9zkXF2jGkd6bytV8I7qQpB3GQlFauAQZFXx4WZ13C1HITUlx2wlDrkeqv8+lX/RJyjgbVoH+wLwk3tDEP99Yw7Xj2E2WnOdaDDNQPnLWsIn3OinrxL2+CWLUzab8799ygAhCdgmGLG+twLM4PH2ZuVcSg0O9qPx8RiAdjKKyzRBnLnA5JF7FkR18gbF4lMdAV2+SETauA4PichwSANCxW4oTfZD51fNuCiQfLW1v8cJ4RLq/ji95kuvVUAym4zQn5aysHzELNQ7e+HAC5aN92XhIyjBQUmvt2rA0G997u4/1ietjSz3PRoSjp3aK1KdW4Be0eVnq/ly/pPFgMyowjmuDmnCFVaTvI+vkmyRoMf9G+HjtddxTyJ8UNpolKA7eWTCAWOT5vgDLg1hd1uB/rCuHzN76fFVJeIr9FQe499Xc45PYiNwakziWjKKR4eTinn3ICnwSCGZcDOfC6vxu7iNjJiwM2kQEZnQHGGR5eqSM4fPzkek4bb3MFRm7aYttNrEMX733kWVcU3fEY5HfCfMwoyA9KyKWXQLS5ri8AARKDom1py7qGageXnyB/uBwlsQicpOQmO0jDnypjdzBhz7sYyz6UInPCJTBRvB6sPBFSfxqWBnnpHiIvS6RRVzG1KppxvBtZDaT3gXZD/bxTerlVpu3L0PrX5TOd5yNYfnbSloZI6hoR8v1GnV0/f/hKD7hdnV/DH1FQ4f/2bW7zMtsX1Cu1xtvtm1yiYZfUEBYM4qicsbwmmyFlYouXfmRxvG9Y0hSWsyd2fLx8nbl/HPnN026uow0dWHrOdJtWqg+9H25yGCeC/h+2kiGW8dEvuXN+oZqDzFT6cmZl4xkoxxi4xhws2IlbK2MUDehc3SlPN6R1JzoIuXE/BQNoHcPUoImWcj6SRCOXPgqfkMBfbMIuhMH5bC/u/TiH/QBtnegrZpKssNTMbwOELjxwpU1bL4+F9jSrbx4JCLpHQ6g4gUH/i4bpkqMMyQoLR/zg1p4uMZ/Fg/t71WerL3or3baAFdIg/TBdt86Olh8ujaCzr2OuB1pHPzNXOGzhQX+j8RD79M+QZNNDn/ywpyzIPbYoHIGkMVTeOCRUhzxkLrBr1b6FQ0djdXA';const _IH='cc9b267676867dda469ea522a2d96f255b9db8a3dc5080aebb15fe744d608ce9';let _src;

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
