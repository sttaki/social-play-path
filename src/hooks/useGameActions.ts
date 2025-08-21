import { useState } from 'react';

interface GameState {
  [gameTitle: string]: {
    isWishlisted: boolean;
    hasReminder: boolean;
  };
}

export function useGameActions() {
  const [gameStates, setGameStates] = useState<GameState>({});

  const toggleWishlist = (title: string, isWishlisted: boolean) => {
    setGameStates(prev => ({
      ...prev,
      [title]: {
        ...prev[title],
        isWishlisted
      }
    }));
  };

  const toggleReminder = (title: string, hasReminder: boolean) => {
    setGameStates(prev => ({
      ...prev,
      [title]: {
        ...prev[title],
        hasReminder
      }
    }));
  };

  const getGameState = (title: string) => {
    return gameStates[title] || { isWishlisted: false, hasReminder: false };
  };

  return {
    toggleWishlist,
    toggleReminder,
    getGameState,
    gameStates
  };
}