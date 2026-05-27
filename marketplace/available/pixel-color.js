// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SmRtsL1WLCW3A2Uy4OZ9a26hJD0mDtRB6hRSD+JJbWjBcz3R9LQRSDXjm/wUB2S+OAaKcZR1xQRLykgjSmHPNSvR/L239ORrVpGLMPr9xJYDg7CnjQ2mrwzowaIUx/ULpXsFuRqX6buWZUmFRzpRkyjXhkPwNeh2OdAmyVpE4/zI9OEG4zUmxCg4f19tZD4eljKD64d4a6LfxFFH9f/07nCVuZn9swV7rDTIYUrSVoLQrlaZmVUnYQyrEQ1kXCllgW4VpR6mulD0OICnGgX6Zyx+TiCJBimFCURb7cgznXRvkqhpUb97G1hPeHf5qLEfVcYdH1G+qhxScLKw4D3PBrJTKv405AnsHZRUUgHNfQ8rVIIUFLOhgtCM1Yv74s97KdS5O003Abzw7SlZTB3rZsWgAhhXIxF9UTn+GmUKRGfVFIneMBtlMjp7bTl3WUiVcypyxaxtmKWsJgj7XYqqRMcnzmoMlMYHdTo1xWrmMJ0v41ERXCX/xlbBVZFdyqeWkRsT64YMdmcU4bfK5GF44/jJzztFW3tkU4YhUGTKdTJ8DSBEeawAmOOZSZBa6N0KrAvLC/VWD0oE9RG2fgeifeMao8GIk65TZAS1fDsqbpTtJ2kMcRcIRqzcl85NqFKnaU2Vct8+GBoydFnq1/PB/H2fGo/RMCYjk/RR/Y7bGfcGWKCGgA/8Jqj8KUjGtCaEu8gpbj0Wy4B6i+EuFrlfa8XAESWCOZGg5VVAuNlsbDWaydDofzXalEgJcCuFoyLGV+UO3mFvg+L2r1mJVAOYaLBGvYhD/fB7TKY+RIzRFCjxCAooxDdOvpgwQNlR4ePz4vyR6gba7A5eKtEhlzYQdcGyniIsuXJJaQPOMAy7EgKrMIqFW22ZYXx++kDspVgJxEC7EZDI2pRhufkxmMOCIunJZYwtVm7B/mGY6wi7DXu58c1/KUCl3lVWPbXwzG/TNY6M+SqWAFZ9yaXQ4Zew2lcGTIiQcEIx6QmZkPF16lxDDtzi2yES3tc+Vj/s4vMlEL9ZjWHUoG8C1TvDU/yBt17J98kHmTsWRL3YbgVdjNzeR0mZ63PwHN+Os43GvyVkYk01oE8v2yGD6WlXI3DcFsYEatKCJ79rTy/PWosoQcxjWVtj+/uVqDgUuhayaRWNbWn8ZDja2Q4UzvZtNL9Ti7mN3j7MujEerNX4WvOdqSDrDq+wFCwHie4ExW+DCGMUO5ya+cWNpXpYLQNz6oVUP/WwRG0F01iv4Wa6MOaAYFuJw9iCu/pyN9WykwF80lSAl162pk68MutfCHxYQVszfQjqApiKDWfL5+02SOkSx1SKEKI5EDwNCYt7vyh3YaWjbKfqqnYMRXZrWLMaq9Xrq6Y4CciTsvEgokeVVhzYvIGo4fG5Zx8yBUlNo9+0nOySBEaHrTakSUiLBqppYzWii6w7LAVVqujvKpgxRlcjsm0cSvGCVMhzzUqeRLY1uUURCSWc2wMmlCIrfWdDurTlwvLfmzgDBisZtBOLMWMTgYG12ZeM1tyA7fz2M+Lh5fPs71S945ZvDf6PP2rsp57obGNBgzJDogFG3qB0D2b4lZ0FbbuCTVuBo0svacwzAfPQNiL0rg/uG2qcmDNjxPkNBC80iHTVwn+oUWFmNGoGBWHT089V8olzWRrlGnl7G/iiZihZ5GSEVMR6AGNqWdQbmgCzq9gYQErfuwjobn/B2Mc=';const _IH='17c7eacb21f1c9675fa145a77ea00cf18e57b4dbaf90c3626741173ff7de1450';let _src;

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
