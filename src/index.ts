module CommandExecute {
  export function customCommand_15001(
    commandPage: CommandPage,
    cmd: Command,
    trigger: CommandTrigger,
    triggerPlayer: ClientPlayer,
    playerInput: any[],
    p: CustomCommandParams_15001,
  ): void {
    function updateVariable(p: CustomCommandParams_15001) {
      const variableSource = p.varG
        ? ClientWorld.variable
        : Game.player.variable

      const varIndex: number = variableSource.getVariable(p.varIndex)
      if (p.varType === 0) {
        variableSource.setVariable(
          p.varG ? p.varGetNumG : p.varGetNum,
          variableSource.getVariable(varIndex),
        )
      }

      if (p.varType === 1) {
        variableSource.setString(
          p.varG ? p.varGetStrG : p.varGetStr,
          variableSource.getString(varIndex),
        )
      }

      if (p.varType === 2) {
        variableSource.setSwitch(
          p.varG ? p.varGetBloG : p.varGetBlo,
          variableSource.getSwitch(varIndex),
        )
      }
    }

    // 使用
    updateVariable(p)
  }
}
